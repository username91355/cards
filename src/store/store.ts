import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import {profileReducer} from './reducers/profile-reducer';
import {loginReducer, TLoginAction} from './reducers/login-reducer';
import {registerReducer, TRegisterActions} from './reducers/register-reducer';
import {packsReducer, TPacksActions} from './reducers/packs-reducer';

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    profile: profileReducer,
    packs: packsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

//App state type
export type TAppState = ReturnType<typeof rootReducer>;

//App actions type
export type TAppAction = TLoginAction | TRegisterActions | TPacksActions;

//App dispatch type
export type TAppDispatch = typeof store.dispatch;

//App thunk type
export type ThunkType = ThunkAction<void, TAppState, unknown, TAppAction>;

//for dev..
//@ts-ignore
window.store = store;