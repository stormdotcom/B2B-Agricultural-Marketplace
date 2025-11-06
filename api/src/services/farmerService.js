import { farmers } from '../data/farmers.js';

export const findMatchingFarmers = (product) => {
  return farmers.filter(f =>
    product.toLowerCase().includes(f.product.toLowerCase())
  );
};

export const notifyFarmers = (farmers, product, quantity, deliveryDate, notes) => {
  farmers.forEach(f => {
    console.log(
      ` Hi ${f.name}, A buyer needs ${product} (${quantity}) by ${deliveryDate}. Notes: ${notes || 'N/A'}`
    );
  });
};
