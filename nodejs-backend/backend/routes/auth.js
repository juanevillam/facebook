const router = require("express").Router();
const { check } = require("express-validator");
const { validateJWT } = require("../middlewares/validateJWT");
const { fieldValidator } = require("../middlewares/fieldValidator");
const { login, register, revalidateToken } = require("../controllers/auth");

// ** Login
router.post(
  "/login",
  // ** Middlewares
  [
    check("email", "Email is required.").isEmail(),
    check(
      "password",
      "The password must be at least 6 characters long."
    ).isLength({ min: 6 }),
    fieldValidator,
  ],
  login
);

router.post(
  "/register",
  // ** Middlewares
  [
    check("email", "Email is required.").isEmail(),
    check("surname", "Surname is required.").not().isEmpty(),
    check("fullName", "Fullname is required.").not().isEmpty(),
    check("username", "Username is required.").not().isEmpty(),
    check("firstName", "First Name is required.").not().isEmpty(),
    check(
      "password",
      "The password must be at least 6 characters long."
    ).isLength({ min: 6 }),
    fieldValidator,
  ],
  register
);

// ** Renew Token
router.get("/revalidateToken", validateJWT, revalidateToken);

module.exports = router;
