import React from "react";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import { AppRouter } from "./Routers/AppRouter";

export const App = () => {
    return (
        <Provider store={ store }>
            <AppRouter />   
        </Provider>
    )
};