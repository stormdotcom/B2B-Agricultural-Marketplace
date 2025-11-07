import { findMatchingFarmers, notifyFarmers } from "../services/farmerService.js";
import { errorResponse, successResponse } from "../utils/response.js";

export const addRequirement = async (req, res) => {
  const { productName, quantity, deliveryDate, notes } = req.body;

  if (!productName || !quantity || !deliveryDate) {
    return errorResponse(res, "Missing required fields", 400);
  }

  const matches =  findMatchingFarmers(productName);

  if (!matches || matches.length === 0) {
    return successResponse(res, `No farmers found for "${productName}"`);
  }

  await notifyFarmers(matches, productName, quantity, deliveryDate, notes);

  return successResponse(
    res,
    `Notified: ${matches.map(f => f.name).join(", ")}`,
    { notifiedFarmers: matches }
  );
};

export const getRequirements = async (req, res) => {
  const requirements = []; 
  return successResponse(res, "All requirements", requirements);
};
