const Post = require("../models/Post");
const User = require("../models/User");

// ** Create Post
const createPost = async (request, response) => {
  const newPost = new Post(request.body);

  try {
    newPost.user = request.id;

    const savedPost = await newPost.save();

    response.status(200).json({
      ok: true,
      savedPost,
    });
  } catch (error) {
    response.status(500).json({
      ok: false,
      error,
    });
  }
};

// ** Update Post
const updatePost = async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);

    if (!post) {
      return response.status(404).json({
        ok: false,
        message: "This Post does not exist.",
      });
    }

    if (post.user == request.body.user) {
      const updatedPost = await Post.findByIdAndUpdate(
        request.params.id,
        request.body,
        {
          new: true,
        }
      ).populate("user");
      response.status(200).json({
        ok: true,
        message: "Post has been updated.",
        updatedPost,
      });
    } else {
      response.status(401).json({
        ok: false,
        message: "You can only update your posts.",
      });
    }
  } catch (error) {
    response.status(500).json({
      ok: false,
      error,
    });
  }
};

// ** Delete Post
const deletePost = async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);

    if (!post) {
      return response.status(404).json({
        ok: false,
        message: "This Post does not exist.",
      });
    }

    if (post.user == request.body.user) {
      await post.deleteOne();
      response.status(200).json({
        ok: true,
        message: "Post has been deleted.",
      });
    } else {
      response.status(403).json({
        ok: false,
        message: "You can only delete your posts.",
      });
    }
  } catch (error) {
    response.status(500).json(error);
  }
};

// ** Like/Dislike Post
const likeDislikePost = async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);

    if (!post.likes.includes(request.body.userId)) {
      await post.updateOne({ $push: { likes: request.body.userId } });
      response.status(200).json({
        ok: true,
        message: "Post has been liked.",
      });
    } else {
      await post.updateOne({ $pull: { likes: request.body.userId } });
      response.status(200).json({
        ok: true,
        message: "Post has been disliked.",
      });
    }
  } catch (error) {
    response.status(500).json({
      ok: false,
      error,
    });
  }
};

// ** Create Comment
const createComment = async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);
    await post.updateOne({
      $push: {
        comments: {
          userId: request.body.userId,
          comment: request.body.comment,
        },
      },
    });
    response.status(200).json({
      ok: true,
      message: "Comment has been added.",
    });
  } catch (error) {
    response.status(500).json({
      ok: false,
      error,
    });
  }
};

// ** Get Post
const getPost = async (request, response) => {
  try {
    const post = await Post.findById(request.params.id).populate("user");
    response.status(200).json({
      ok: true,
      post,
    });
  } catch (error) {
    response.status(500).json({
      ok: false,
      error,
    });
  }
};

// ** Get All User's Posts
const getAllUserPosts = async (request, response) => {
  try {
    const user = await User.findOne({ username: request.params.username });
    const posts = await Post.find({ user: user._id }).populate("user");

    response.status(200).json({
      ok: true,
      posts,
    });
  } catch (error) {
    response.status(500).json({
      ok: false,
      error,
    });
  }
};

// ** Get Timeline Posts
const getTimelinePosts = async (request, response) => {
  try {
    const currentUser = await User.findById(request.params.userId);
    const userPosts = await Post.find({ user: currentUser._id }).populate(
      "user"
    );
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );

    response.status(200).json({
      ok: true,
      posts: userPosts.concat(...friendPosts),
    });
  } catch (error) {
    response.status(500).json({
      ok: false,
      error,
    });
  }
};

module.exports = {
  createPost,
  deletePost,
  likeDislikePost,
  createComment,
  getPost,
  getAllUserPosts,
  getTimelinePosts,
  updatePost,
};
