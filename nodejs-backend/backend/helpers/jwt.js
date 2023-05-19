const jwt = require("jsonwebtoken");

const generateJWT = (id, fullName) => {
  return new Promise((resolve, reject) => {
    const payload = { id, fullName };

    jwt.sign(
      payload,
      process.env.JWT_SEED,
      {
        expiresIn: "5d",
      },
      (error, token) => {
        if (error) {
          console.log(error);
          reject("Can't generate token.");
        }

        resolve(token);
      }
    );
  });
};

module.exports = { generateJWT };
