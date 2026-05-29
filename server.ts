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

    const serviceLabels: Record<string, string> = {
      "daycare-cleaning": "Preschool & Daycare Cleaning",
      "airbnb-cleaning": "Airbnb Turnover Cleaning",
      "residential-cleaning": "Residential House Deep Clean",
      "junk-removal": "Commercial & Residential Junk Removal",
      "other": "Other / Custom Cleaning Service"
    };
    const formattedService = serviceLabels[serviceType] || serviceType;

    // Generate dynamic contact action buttons based on preference
    let actionButtonsHtml = "";
    const primaryStyle = "display: block; text-align: center; background-color: #B30000; color: #FFFFFF; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; padding: 14px 24px; border-radius: 100px; text-decoration: none;";
    const secondaryStyle = "display: block; text-align: center; background-color: #1C1C1E; border: 1px solid #27272A; color: #E4E4E7; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; padding: 14px 24px; border-radius: 100px; text-decoration: none;";

    const lowerPref = (preferredContact || "").toLowerCase();
    
    if (lowerPref.includes("text") || lowerPref.includes("sms")) {
      actionButtonsHtml = `
        <table style="width: 100%; border-collapse: collapse; margin-top: 32px;">
          <tr>
            <td style="width: 50%; padding-right: 8px;">
              <a href="sms:${phone}" style="${primaryStyle}">
                💬 Text Client
              </a>
            </td>
            <td style="width: 50%; padding-left: 8px;">
              <a href="tel:${phone}" style="${secondaryStyle}">
                📞 Call Client
              </a>
            </td>
          </tr>
          ${email ? `
          <tr>
            <td colspan="2" style="padding-top: 12px; text-align: center;">
              <a href="mailto:${email}" style="color: #A1A1AA; font-size: 13px; text-decoration: underline;">
                Or email client: ${email}
              </a>
            </td>
          </tr>
          ` : ''}
        </table>
      `;
    } else if (lowerPref.includes("email") || lowerPref.includes("mail")) {
      actionButtonsHtml = `
        <table style="width: 100%; border-collapse: collapse; margin-top: 32px;">
          <tr>
            <td style="width: 50%; padding-right: 8px;">
              ${email ? `
              <a href="mailto:${email}" style="${primaryStyle}">
                ✉️ Email Client
              </a>
              ` : `
              <a href="tel:${phone}" style="${primaryStyle}">
                📞 Call Client
              </a>
              `}
            </td>
            <td style="width: 50%; padding-left: 8px;">
              <a href="sms:${phone}" style="${secondaryStyle}">
                💬 Text Client
              </a>
            </td>
          </tr>
        </table>
      `;
    } else {
      // Default call is primary, text is secondary
      actionButtonsHtml = `
        <table style="width: 100%; border-collapse: collapse; margin-top: 32px;">
          <tr>
            <td style="width: 50%; padding-right: 8px;">
              <a href="tel:${phone}" style="${primaryStyle}">
                📞 Call Client
              </a>
            </td>
            <td style="width: 50%; padding-left: 8px;">
              <a href="sms:${phone}" style="${secondaryStyle}">
                💬 Text Client
              </a>
            </td>
          </tr>
          ${email ? `
          <tr>
            <td colspan="2" style="padding-top: 12px; text-align: center;">
              <a href="mailto:${email}" style="color: #A1A1AA; font-size: 13px; text-decoration: underline;">
                Or email client: ${email}
              </a>
            </td>
          </tr>
          ` : ''}
        </table>
      `;
    }

    const emailHtml = `
      <div style="background-color: #080808; padding: 32px 16px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #FFFFFF; min-height: 100%;">
        <div style="max-width: 580px; margin: 0 auto; background-color: #121212; border: 1px solid #27272A; border-top: 4px solid #B30000; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          
          <!-- Header Section -->
          <div style="padding: 32px 32px 20px 32px; text-align: center; border-bottom: 1px solid #1F1F22;">
            <div style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.25em; color: #B30000; margin-bottom: 8px;">
              L&J PRESTIGE CLEANING LLC
            </div>
            <h2 style="font-size: 22px; font-weight: 700; margin: 0; color: #FFFFFF; letter-spacing: -0.02em;">
              New Estimate Request
            </h2>
            <p style="font-size: 12px; color: #A1A1AA; margin: 6px 0 0 0;">
              Received from ljprestigecleaningllc.com
            </p>
          </div>

          <!-- Main Content -->
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1F1F22; font-size: 13px; font-weight: 700; color: #A1A1AA; text-transform: uppercase; letter-spacing: 0.05em; width: 150px;">
                  Client Name
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1F1F22; font-size: 15px; font-weight: 500; color: #FFFFFF;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1F1F22; font-size: 13px; font-weight: 700; color: #A1A1AA; text-transform: uppercase; letter-spacing: 0.05em;">
                  Phone Number
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1F1F22; font-size: 15px; font-weight: 700; color: #FFFFFF;">
                  <a href="tel:${phone}" style="color: #B30000; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1F1F22; font-size: 13px; font-weight: 700; color: #A1A1AA; text-transform: uppercase; letter-spacing: 0.05em;">
                  Email Address
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1F1F22; font-size: 15px; color: #FFFFFF;">
                  ${email ? `<a href="mailto:${email}" style="color: #FFFFFF; text-decoration: underline;">${email}</a>` : '<span style="color: #52525B; font-style: italic;">Not provided</span>'}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1F1F22; font-size: 13px; font-weight: 700; color: #A1A1AA; text-transform: uppercase; letter-spacing: 0.05em;">
                  Service Type
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1F1F22; font-size: 14px; color: #FFFFFF;">
                  <span style="display: inline-block; background-color: #B30000; color: #FFFFFF; padding: 4px 10px; border-radius: 100px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">
                    ${formattedService}
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1F1F22; font-size: 13px; font-weight: 700; color: #A1A1AA; text-transform: uppercase; letter-spacing: 0.05em;">
                  Contact Via
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1F1F22; font-size: 15px; color: #FFFFFF;">
                  ${preferredContact || 'No preference'}
                </td>
              </tr>
            </table>

            <!-- Project details -->
            <div style="margin-top: 32px;">
              <h4 style="font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #A1A1AA; margin: 0 0 12px 0;">
                Message & Project Scope
              </h4>
              <div style="background-color: #18181B; border: 1px solid #27272A; border-left: 3px solid #B30000; border-radius: 12px; padding: 18px; color: #E4E4E7; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message || 'No details provided.'}</div>
            </div>

            <!-- Quick Action -->
            ${actionButtonsHtml}
          </div>

          <!-- Footer -->
          <div style="padding: 24px 32px 32px 32px; background-color: #0E0E10; border-top: 1px solid #1F1F22; text-align: center;">
            <p style="font-size: 11px; color: #71717A; margin: 0 0 8px 0; line-height: 1.5;">
              L&J Prestige Cleaning LLC · Colorado Springs, Denver, Pueblo
            </p>
            <p style="font-size: 10px; color: #52525B; margin: 0;">
              Received on ${new Date().toLocaleString('en-US', { timeZone: 'America/Denver' })} (Mountain Time)
            </p>
          </div>

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
