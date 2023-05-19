import { Comment } from "./Comment";

export const Comments = ({ comments, user }) =>
  comments.map((comment) => (
    <Comment comment={comment} key={comment._id} user={user} />
  ));
