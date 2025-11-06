import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { farmers } from "../data/farmers.js";
import { sendMail } from "./mailService.js";

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const findMatchingFarmers = (product) => {
  return farmers.filter((f) =>
    product.toLowerCase().includes(f.product.toLowerCase())
  );
};

export const notifyFarmers = (farmers, product, quantity, deliveryDate, notes) => {
  farmers.forEach((f) => {
    sendMail({
      to: f.email,
      subject: `New Requirement Alert | ${product}`,
      farmerName: f.name,
      quantity,
      product,
      deliveryDate,
      notes,
    });

    console.log(
      ` Hi ${f.name}, A buyer needs ${product} (${quantity}) by ${deliveryDate}. Notes: ${notes || "N/A"}`
    );

    // Append email details to emailLog.json
    const logEntry = {
      email: f.email,
      product,
      quantity,
      deliveryDate,
      notes,
      timestamp: new Date().toISOString(),
    };

    const logPath = path.join(__dirname, "../data/emailLog.json");
    const logData = JSON.parse(fs.readFileSync(logPath, "utf8"));
    logData.push(logEntry);
    fs.writeFileSync(logPath, JSON.stringify(logData, null, 2));
  });
};
