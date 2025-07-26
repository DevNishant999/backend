// controllers/leadController.js
import Lead from "../models/Lead.js";
import nodemailer from "nodemailer";    

// Leadsquared credentials
const accessKey = "u$rec6fd65411b7ca03d3c3dfd3d2e400ab";
const secretKey = "3069ce14dc9eb91365eec40c320f68a379a6e40f";

// Nodemailer transporter (example: Gmail SMTP)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "nishantsharma7428@gmail.com",
    pass: "nlua tdpb cbcx shyx",
  },
});

// const { LEADSQUARED_ACCESS_KEY, LEADSQUARED_SECRET_KEY } = process.env;

export const submitLeadForm = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phone,
      city,
      email,
      utmParams = {},
    } = req.body;

    const payload = [
      { Attribute: "FirstName", Value: firstName.trim() },
      { Attribute: "LastName", Value: lastName.trim() },
      { Attribute: "Phone", Value: phone.trim() },
      { Attribute: "mx_City_", Value: city.trim() },
      { Attribute: "Source", Value: "Google Ads" },
      { Attribute: "mx_utm_source", Value: "google-lp" },
      { Attribute: "SourceMedium", Value: utmParams.utm_medium || "" },
      { Attribute: "mx_utm_campaign_id", Value: utmParams.utm_campaign || "" },
      { Attribute: "SourceContent", Value: utmParams.utm_content || "" },
      { Attribute: "mx_Campaign_id", Value: utmParams.campaign_id || "" },
      { Attribute: "mx_GCLid", Value: utmParams.GCLid || "" },
    ];

    if (email) {
      payload.push({ Attribute: "EmailAddress", Value: email.trim() });
    }

    const apiUrl = `https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Capture?accessKey=${accessKey}&secretKey=${secretKey}`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data?.Status === "Success") {
      // ✅ DB Save
      await Lead.create({
        firstName,
        lastName,
        phone,
        city,
        email,
        utmParams,
      });

      // ✅ Email notify
      const mailOptions = {
        from: '"Website Lead" <lead@gmail.com>',
        to: "nishantsharma7428@gmail.com",
        subject: `New Lead: ${firstName} ${lastName}`,
        html: `
          <h2>New Lead Details</h2>
          <ul>
            <li><strong>Name:</strong> ${firstName} ${lastName}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>City:</strong> ${city}</li>
            <li><strong>Email:</strong> ${email || "Not Provided"}</li>
            <li><strong>UTM Source:</strong> ${utmParams.utm_source || ""}</li>
            <li><strong>UTM Medium:</strong> ${utmParams.utm_medium || ""}</li>
            <li><strong>UTM Campaign:</strong> ${
              utmParams.utm_campaign || ""
            }</li>
            <li><strong>UTM Content:</strong> ${
              utmParams.utm_content || ""
            }</li>
            <li><strong>Campaign ID:</strong> ${
              utmParams.campaign_id || ""
            }</li>
            <li><strong>GCLID:</strong> ${utmParams.GCLid || ""}</li>
          </ul>
        `,
      };

      await transporter.sendMail(mailOptions);

      return res
        .status(200)
        .json({ success: true, message: "Lead created, saved & email sent." });
    } else {
      return res
        .status(500)
        .json({
          success: false,
          message: data.ExceptionMessage || "LeadSquared error.",
        });
    }
  } catch (error) {
    console.error("Submit Lead Error:", error);
    res.status(500).json({ success: false, message: "Server Error." });
  }
};
