import { findMatchingFarmers, notifyFarmers } from '../services/farmerService.js';

export const addRequirement = (req, res) => {
  const { productName, quantity, deliveryDate, notes } = req.body;

  if (!productName || !quantity || !deliveryDate) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const matches = findMatchingFarmers(productName);

  if (matches.length === 0) {
    return res.json({ message: `No farmers found for "${productName}"` });
  }

  notifyFarmers(matches, productName, quantity, deliveryDate, notes);

  res.json({
    message: `Notified: ${matches.map(f => f.name).join(', ')}`
  });
};

export const getRequirements = (res, req) => {
  res.json({
    message: `All requirements:`
  });
}