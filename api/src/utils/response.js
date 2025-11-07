export const sendResponse = (res, statusCode, success, message, data = null) => {
  return res.status(statusCode).json({
    success,
    message,
    data,
  });
};

export const successResponse = (res, message, data = null, status = 200) => {
  return sendResponse(res, status, true, message, data);
};

export const errorResponse = (res, message, status = 400, data = null) => {
  return sendResponse(res, status, false, message, data);
};
