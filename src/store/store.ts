import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import {profileReducer} from "./reducers/profile-reducer";
import {loginReducer} from "./reducers/login-reducer";

const rootReducer = combineReducers({
    login: loginReducer,
    profile: profileReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

//App state type
export type TAppState = ReturnType<typeof rootReducer>;

//App actions type
export type TAppAction = any;

//App dispatch type
export type TAppDispatch = typeof store.dispatch;

//App thunk type
export type ThunkType = ThunkAction<void, TAppState, unknown, TAppAction>;

//for dev..
//@ts-ignore
window.store = store;