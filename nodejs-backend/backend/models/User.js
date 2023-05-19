const { model, Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    bio: {
      max: 101,
      type: String,
      default: "No bio yet.",
    },
    city: {
      max: 50,
      default: "",
      type: String,
    },
    country: {
      max: 50,
      default: "",
      type: String,
    },
    coverPicture: {
      default: "",
      type: String,
    },
    email: {
      min: 6,
      unique: true,
      type: String,
      required: true,
    },
    firstName: {
      min: 2,
      max: 20,
      type: String,
      required: true,
    },
    followers: {
      default: [],
      type: Array,
    },
    followings: {
      default: [],
      type: Array,
    },
    fullName: {
      min: 2,
      max: 40,
      type: String,
      required: true,
    },
    password: {
      min: 6,
      type: String,
      required: true,
    },
    profilePicture: {
      default: "",
      type: String,
    },
    relationship: {
      type: String,
      default: "Single",
    },
    surname: {
      min: 2,
      max: 20,
      type: String,
      required: true,
    },
    username: {
      min: 2,
      max: 20,
      unique: true,
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", UserSchema);
