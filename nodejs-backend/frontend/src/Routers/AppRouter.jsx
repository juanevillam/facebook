// * React Redux
import { Provider } from "react-redux";

// ** Store
import { store } from "../Store/store";

// * Custom Components
import { Auth } from "../Pages/Auth";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRoute } from "./Routes/PublicRoute";
import { PrivateRoute } from "./Routes/PrivateRoute";

// * React Router Dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/auth"
            element={
              <PublicRoute>
                <Auth />
              </PublicRoute>
            }
          />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <PrivateRouter />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
