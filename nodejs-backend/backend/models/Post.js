const { model, Schema } = require("mongoose");

const PostSchema = new Schema(
  {
    comments: {
      default: [],
      type: Array,
    },
    thoughts: {
      default: "",
      type: String,
    },
    felling: {
      type: String,
    },
    fellingEmoji: {
      type: String,
    },
    image: {
      type: String,
    },
    likes: {
      default: [],
      type: Array,
    },
    thoughts: {
      type: String,
    },
    user: {
      ref: "User",
      required: true,
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Post", PostSchema);
