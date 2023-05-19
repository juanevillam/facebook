// ** i18next / Languages
import "./Languages/index";

// ** Styles
import "./Styles/index.css";

// ** Store
import { store } from "./Store/store";

// ** React Redux
import { Provider } from "react-redux";

// ** Routers
import { AppRouter } from "./Routers/AppRouter";

export const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
