import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Parse JSON payloads
  app.use(express.json());

  // Serve static files from the public folder directly (robust fallback for dev & prod)
  app.use(express.static(path.join(process.cwd(), "public")));

  // API Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Resend API booking submit route
  app.post("/api/estimate", async (req, res) => {
    const { name, phone, email, serviceType, preferredContact, message } = req.body;

    if (!name || !phone || !serviceType) {
      return res.status(400).json({
        success: false,
        error: "Name, phone, and service type are required fields."
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.ADMIN_EMAIL || process.env.RECEIVER_EMAIL || "mercuritesolutions@gmail.com";

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #1a1a1a; background-color: #111111; color: #f5f5f5;">
        <div style="text-align: center; border-bottom: 2px solid #C0392B; padding-bottom: 20px;">
          <h2 style="color: #F39C12; margin: 0; font-size: 24px;">L&J PRESTIGE CLEANING</h2>
          <p style="color: #cccccc; margin: 5px 0 0 0;">New Free Estimate / Booking Request</p>
        </div>
        <div style="padding: 20px 0;">
          <p style="font-size: 16px;">You have received a new booking or cleaning estimate submission:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #222222; font-weight: bold; width: 140px; color: #999;">Customer Name:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #222222; color: #f5f5f5;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #222222; font-weight: bold; color: #999;">Phone Number:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #222222;"><a href="tel:${phone}" style="color: #E67E22; text-decoration: none; font-weight: bold;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #222222; font-weight: bold; color: #999;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #222222;"><a href="mailto:${email || ""}" style="color: #C0392B; text-decoration: none;">${email || "Not Provided"}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #222222; font-weight: bold; color: #999;">Requested Service:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #222222;"><span style="background-color: #C0392B; color: white; padding: 3px 8px; border-radius: 4px; font-weight: bold; font-size: 12px; text-transform: uppercase;">${serviceType}</span></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #222222; font-weight: bold; color: #999;">Contact Preference:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #222222; color: #f5f5f5;">${preferredContact || "No preference"}</td>
            </tr>
          </table>
          
          <p style="font-weight: bold; margin-top: 25px; color: #F39C12; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Message & Project Scope:</p>
          <div style="background-color: #1a1a1a; padding: 15px; border-left: 4px solid #C0392B; color: #f5f5f5; border-radius: 4px; white-space: pre-wrap; line-height: 1.5;">${message || "No additional comments provided."}</div>
        </div>
        <div style="text-align: center; font-size: 11px; color: #666; border-top: 1px solid #222222; padding-top: 20px; margin-top: 20px;">
          Received on: ${new Date().toLocaleString()}<br/>
          L&J Prestige Cleaning & Junk Removal • Colorado, USA
        </div>
      </div>
    `;

    console.log("📝 Received booking submission to log:");
    console.log(`- Customer Name: ${name}`);
    console.log(`- Phone: ${phone}`);
    console.log(`- Email: ${email}`);
    console.log(`- Service Type: ${serviceType}`);
    console.log(`- Preferred Contact: ${preferredContact}`);
    console.log(`- Message: ${message}`);

    if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
      console.warn("⚠️ [Resend API is NOT configured in secrets / .env. RESEND_API_KEY is missing.]");
      return res.status(200).json({
        success: true,
        simulation: true,
        message: "Your estimate request was logged. It has been simulated successfully since the owner has not set a RESEND_API_KEY."
      });
    }

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: "L&J Website <onboarding@resend.dev>",
          to: recipient,
          subject: `✨ New L&J Request: ${serviceType} - ${name}`,
          html: emailHtml
        })
      });

      const data = await response.json();
      if (!response.ok) {
        console.error("❌ Resend API Error Response:", data);
        return res.status(response.status).json({
          success: false,
          error: data.message || "Failed to send email via Resend API."
        });
      }

      console.log("🚀 Email sent successfully via Resend API", data);
      return res.status(200).json({
        success: true,
        message: "Your estimate request has been submitted successfully! We will call/contact you content shortly."
      });
    } catch (err: any) {
      console.error("💥 Server-side exception sending email:", err);
      return res.status(500).json({
        success: false,
        error: "Severe: Exception occurred while contacting high-level Send Server."
      });
    }
  });

  // Vite dev middleware / production serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
