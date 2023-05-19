// ** Axios
import axios from "axios";

// ** Actions
import { setPostsOnHome } from "../Actions/ui";

export const fetchPostsOnHome = async (
  dispatch,
  postsOnHome,
  token,
  userId
) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL_LOCAL}posts/timeline/${userId}`,
    {
      headers: {
        "x-token": token,
      },
    }
  );
  if (postsOnHome?.length === 0) {
    dispatch(
      setPostsOnHome(
        response.data.posts.sort((p1, p2) => {
          return new Date(p2?.createdAt) - new Date(p1?.createdAt);
        })
      )
    );
  }
};
