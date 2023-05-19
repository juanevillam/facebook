// * React Redux
import { useSelector } from "react-redux";

// * React Router Dom
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const { user } = useSelector((state) => state?.AuthReducer);

  return user ? <Navigate to="/" /> : children;
};
