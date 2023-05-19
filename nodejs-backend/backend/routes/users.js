const bcrypt = require("bcrypt");
const User = require("../models/User");
const router = require("express").Router();

// ** Get User
router.get("/", async (request, response) => {
  const userId = request.query.userId;
  const username = request.query.username;

  try {
    // prettier-ignore
    const user = userId ? await User.findById(userId) : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    response.status(200).json(other);
  } catch (error) {
    response.status(500).json(error);
  }
});

// ** Follow User
router.put("/:id/follow", async (request, response) => {
  if (request.body.userId !== request.params.id) {
    try {
      const user = await User.findById(request.params.id);
      const currentUser = await User.findById(request.body.userId);

      if (!user.followers.includes(request.body.userId)) {
        await user.updateOne({ $push: { followers: request.body.userId } });
        await currentUser.updateOne({
          $push: { followings: request.params.id },
        });
        response.status(200).json("User has been followed.");
      } else {
        response.status(403).json("You already follow this user.");
      }
    } catch (error) {
      response.status(500).json(error);
    }
  } else {
    response.status(403).json("You can't follow yourself.");
  }
});

// ** Update User
router.put("/:id", async (request, response) => {
  if (request.body.userId === request.params.id) {
    if (request.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        request.body.password = await bcrypt.hash(request.body.password, salt);
      } catch (error) {
        return response.status(500).json(error);
      }
    }

    try {
      const user = await User.findByIdAndUpdate(request.params.id, {
        $set: request.body,
      });
      response.status(200).json("Account has been updated.");
    } catch (error) {
      return response.status(500).json(error);
    }
  } else {
    return response.status(403).json("You only can update your account.");
  }
});

// ** Delete User
router.delete("/:id", async (request, response) => {
  if (request.body.userId === request.params.id) {
    try {
      await User.findByIdAndDelete(request.params.id);
      response.status(200).json("Account has been deleted.");
    } catch (error) {
      return response.status(500).json(error);
    }
  } else {
    return response.status(403).json("You only can delete your account.");
  }
});

// ** Unfollow User
router.put("/:id/unfollow", async (request, response) => {
  if (request.body.userId !== request.params.id) {
    try {
      const user = await User.findById(request.params.id);
      const currentUser = await User.findById(request.body.userId);

      if (user.followers.includes(request.body.userId)) {
        await user.updateOne({ $pull: { followers: request.body.userId } });
        await currentUser.updateOne({
          $pull: { followings: request.params.id },
        });
        response.status(200).json("User has been unfollowed.");
      } else {
        response.status(403).json("You don't follow this user.");
      }
    } catch (error) {
      response.status(500).json(error);
    }
  } else {
    response.status(403).json("You can't unfollow yourself.");
  }
});

module.exports = router;
