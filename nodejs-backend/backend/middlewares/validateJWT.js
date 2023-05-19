const jwt = require("jsonwebtoken");

const validateJWT = (request, response, next) => {
  const token = request.header("x-token");

  if (!token) {
    return response.status(401).json({
      ok: false,
      message: "Token in required.",
    });
  }

  try {
    const { id } = jwt.verify(token, process.env.JWT_SEED);

    request.id = id;
  } catch (error) {
    return response.status(401).json({
      ok: false,
      message: "Token invalid.",
    });
  }

  next();
};

module.exports = { validateJWT };
