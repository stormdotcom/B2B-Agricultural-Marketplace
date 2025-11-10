import axios from "axios";

const API_TOKEN = "337d33937566b219e6cf4d232c9d006c03b6540ca8a07bca";

function buildEmailTemplate({ farmerName, product, quantity, deliveryDate, notes }) {
  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f5f8f3; padding: 30px;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 3px 8px rgba(0,0,0,0.08);">
        
        <div style="background-color: #2f855a; color: #ffffff; text-align: center; padding: 18px 0;">
          <h2 style="margin: 0; font-weight: 600;">🌿 Agri Marketplace</h2>
        </div>
        
        <div style="padding: 25px 30px; color: #333333;">
          <p style="font-size: 16px; margin-bottom: 12px;">Hi <strong>${farmerName}</strong>,</p>
          <p style="font-size: 15px; line-height: 1.6;">
            A buyer has requested <strong style="color: #2f855a;">${product}</strong>
            (Quantity: <strong>${quantity}</strong>) to be delivered by 
            <strong>${deliveryDate}</strong>.
          </p>

          ${
            notes
              ? `<p style="margin-top: 10px; background: #f9fafb; border-left: 4px solid #2f855a; padding: 10px 12px; border-radius: 5px;">
                   <em>Note from buyer:</em> ${notes}
                 </p>`
              : ""
          }

          <p style="margin-top: 24px; font-size: 15px;">Please reply or reach out if you can fulfill this order.</p>
        </div>

        <div style="background-color: #f0f4f0; padding: 15px 20px; text-align: center; font-size: 13px; color: #666;">
          <p style="margin: 0;">© ${new Date().getFullYear()} Agri Marketplace. All rights reserved.</p>
        </div>
      </div>
    </div>
  `;
}

export async function sendMail({ to, subject, farmerName, product, quantity, deliveryDate, notes }) {
  try {
    

    const htmlTemplate = buildEmailTemplate({
      farmerName,
      product,
      quantity,
      deliveryDate,
      notes,
    });

    const payload = {
      to,
      subject,
      html: htmlTemplate,
      text: `Hi ${farmerName}, A buyer needs ${product} (${quantity}) by ${deliveryDate}. Notes: ${notes || "N/A"}`,
    };

    const response = await axios.post(
      "http://mailer.ajmalnasumudeen.in/api/send",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        timeout: 8000, // ✅ avoid hanging
      }
    );

    console.log(`✅ Mail forwarded for }`);

    return response.data;
  } catch (error) {
    console.error("❌ sendMail() failed:");

    if (error.response) {
      console.error("↳ API responded:", error.response.status, error.response.data);
    } else {
      console.error("↳ Error:", error.message);
    }

    throw error;
  }
}
