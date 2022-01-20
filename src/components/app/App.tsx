import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import HeaderCont from "../header/HeaderCont";
import {AppRoutes} from "../routes/AppRoutes";
import { store } from '../../store/store';

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className='app_wrapper'>
                    <HeaderCont />
                    <AppRoutes />
                </div>
            </BrowserRouter>
       </Provider>
    );
}

export default App;
