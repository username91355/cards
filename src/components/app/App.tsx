import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import {store} from '../../store/store';
import HeaderCont from "../header/HeaderCont";
import {AppRoutes} from "../routes/AppRoutes";

function App() {

    return (
        <React.StrictMode>
            <HashRouter>
                <Provider store={store}>
                    <div className='app__wrapper'>
                        <HeaderCont/>
                        <AppRoutes/>
                    </div>
                </Provider>
            </HashRouter>
        </React.StrictMode>
    );
}

export default App;
