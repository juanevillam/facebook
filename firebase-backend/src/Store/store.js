import thunk from "redux-thunk";
import { ui } from "../Reducers/ui";
import { auth } from "../Reducers/auth";
import { posts } from "../Reducers/posts";
import { story } from "../Reducers/story";
import { stories } from "../Reducers/stories";
import { profile } from "../Reducers/profile";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

const composeEnhancers = ( typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose;
const reducers = combineReducers({ 
    auth, 
    posts, 
    story, 
    stories,
    profile, 
    ui 
});

export const store = createStore( reducers,  composeEnhancers( applyMiddleware( thunk ) ) );