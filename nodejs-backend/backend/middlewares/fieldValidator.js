const { validationResult } = require("express-validator");

const fieldValidator = (request, response, next) => {
  // ** Error handling
  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    return response.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  next();
};

module.exports = { fieldValidator };
