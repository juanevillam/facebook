const bcrypt = require("bcrypt");
const User = require("../models/User");
const { generateJWT } = require("../helpers/jwt");

// ** Login
const login = async (request, response) => {
  const { email, password } = request.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return response.status(400).json({
        ok: false,
        message: "There is no existing user with this email.",
      });
    }

    // ** Check password
    const validPassword = bcrypt.compareSync(password, user?.password);

    if (!validPassword) {
      return response.status(400).json({
        ok: false,
        message: "Oops! Incorrect password.",
      });
    }

    // ** Generate JWT
    const token = await generateJWT(user._id);

    response.json({
      ok: true,
      message: "You logged in successfully.",
      user,
      token,
    });
  } catch (error) {
    response.status(500).json({
      ok: false,
      message: "Please talk to the administrator (Juan Villa).",
    });
  }
};

// ** Register
const register = async (request, response) => {
  const { email, password, username } = request.body;

  try {
    let user = await User.findOne({ email });
    let userWithThisUsername = await User.findOne({ username });

    if (user) {
      return response.status(400).json({
        ok: false,
        message: "This email is already in use.",
      });
    }

    if (userWithThisUsername) {
      return response.status(400).json({
        ok: false,
        message: "This username is already in use. Choose another one.",
      });
    }

    user = new User(request.body);

    // ** Password encryption
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    // ** Register successful
    await user.save();

    // ** Generate JWT
    const token = await generateJWT(user._id);

    response.status(201).json({
      ok: true,
      message: "Your user has been successfully registered.",
      user,
      token,
    });
  } catch (error) {
    response.status(500).json({
      ok: false,
      message: "Please talk to the administrator (Juan Villa).",
    });
  }
};

// ** Revalidate Token
const revalidateToken = async (request, response) => {
  const { id } = request;

  try {
    const user = await User.findOne({ _id: id });

    // ** Generate JWT
    const token = await generateJWT(id);

    response.json({
      ok: true,
      id,
      user,
      token,
    });
  } catch (error) {
    response.status(500).json({
      ok: false,
      message: "Please talk to the administrator (Juan Villa).",
    });
  }
};

module.exports = { login, register, revalidateToken };
