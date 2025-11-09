import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { farmers } from "../data/farmers.js";
import { sendMail } from "./mailService.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const findMatchingFarmers = (product) => {
  return farmers.filter((f) =>
    product.toLowerCase().includes(f.product.toLowerCase())
  );
};

export const notifyFarmers = async (farmers, product, quantity, deliveryDate, notes) => {
  farmers.forEach(async (f) => {
    await sendMail({
      to: f.email,
      subject: `New Product Requirement Alert | ${product}`,
      farmerName: f.name,
      quantity,
      product,
      deliveryDate,
      notes,
    });



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
