const router = require("express").Router();
const { check } = require("express-validator");
const { validateJWT } = require("../middlewares/validateJWT");
const { fieldValidator } = require("../middlewares/fieldValidator");
const {
  getPost,
  createPost,
  deletePost,
  updatePost,
  createComment,
  getAllUserPosts,
  likeDislikePost,
  getTimelinePosts,
} = require("../controllers/posts");

// ** Middleware used for all routes
router.use(validateJWT);

// ** Get Post
router.get("/:id", getPost);

// ** Create Post
router.post("/", fieldValidator, createPost);

// ** Update Post
router.put(
  "/:id",
  [check("user", "User is required.").not().isEmpty(), fieldValidator],
  updatePost
);

// ** Delete Post
router.delete(
  "/:id",
  [check("user", "User is required.").not().isEmpty(), fieldValidator],
  deletePost
);

// ** Like / Dislike Post
router.put(
  "/:id/like",
  [check("userId", "UserId is required.").not().isEmpty(), fieldValidator],
  likeDislikePost
);

// ** Create Comment
router.post(
  "/:id/comment",
  [
    check("userId", "UserId is required.").not().isEmpty(),
    check("comment", "Comment is required.").not().isEmpty(),
    fieldValidator,
  ],
  createComment
);

// ** Get All User's Posts
router.get("/profile/:username", getAllUserPosts);

// ** Get Timeline Posts
router.get(
  "/timeline/:userId",
  [check("userId", "UserId is required.").not().isEmpty(), fieldValidator],
  getTimelinePosts
);

module.exports = router;
