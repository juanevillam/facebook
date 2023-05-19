// * React Redux
import { useSelector } from "react-redux";

// * React Router Dom
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state?.AuthReducer);

  return user ? children : <Navigate to="/auth" />;
};
