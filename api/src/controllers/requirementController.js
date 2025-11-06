import { findMatchingFarmers, notifyFarmers } from '../services/farmerService.js';

export const addRequirement = (req, res) => {
  const { product, quantity, deliveryDate, notes } = req.body;

  if (!product || !quantity || !deliveryDate) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const matches = findMatchingFarmers(product);

  if (matches.length === 0) {
    return res.json({ message: `No farmers found for "${product}"` });
  }

  notifyFarmers(matches, product, quantity, deliveryDate, notes);
  // todo save the requirement as json data
  res.json({
    message: `Notified: ${matches.map(f => f.name).join(', ')}`
  });
};

export const getRequirements = (res, req) => {
  res.json({
    message: `Notified:`
  });
}