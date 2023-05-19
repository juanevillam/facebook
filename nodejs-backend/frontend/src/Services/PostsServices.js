// ** Axios
import axios from "axios";

export const fetchHomePosts = async (setPosts) => {
  const response = await axios.get("posts/timeline/622fa58cd3b1b1337432a55d");
  setPosts(response.data);
};

export const fetchProfilePosts = async (setPosts) => {
  const response = await axios.get("/posts/profile/juanevillam");
  setPosts(response.data);
};
