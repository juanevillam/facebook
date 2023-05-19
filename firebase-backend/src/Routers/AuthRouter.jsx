import React from "react";
import { Auth } from "../Views/Auth";
import { Switch, Route, Redirect } from "react-router-dom";

export const AuthRouter = () => {
    return (
        <Switch>
            <Route path="/auth" component={ Auth } exact />
            <Redirect to="/auth" />
        </Switch>
    );
};