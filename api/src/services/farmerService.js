import { farmers } from '../data/farmers.js';
import { sendMail } from './mailService.js';

export const findMatchingFarmers = (product) => {
  return farmers.filter(f =>
    product.toLowerCase().includes(f.product.toLowerCase())
  );
};

export const notifyFarmers = (farmers, product, quantity, deliveryDate, notes) => {
  farmers.forEach(f => {
      sendMail( { to:f.email,
        subject:`New Requirement Alert | ${product}`,
        farmerName: f.name,
        quantity,
        product,
        deliveryDate,
        notes
  })
    console.log(
      ` Hi ${f.name}, A buyer needs ${product} (${quantity}) by ${deliveryDate}. Notes: ${notes || 'N/A'}`
    );
  });
};
