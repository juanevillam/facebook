// ** Axios
import axios from "axios";

export const fetchPostsOnProfile = async (setPosts, token, username) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL_LOCAL}posts/profile/${username}`,
    {
      headers: {
        "x-token": token,
      },
    }
  );
  setPosts(
    response?.data?.posts?.sort((p1, p2) => {
      return new Date(p2.createdAt) - new Date(p1.createdAt);
    })
  );
};
