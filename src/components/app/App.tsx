import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from '../../store/store';
import Main from "../main/Main";

function App() {

    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <div className='app__wrapper'>
                        <Main/>
                    </div>
                </Provider>
            </BrowserRouter>

        </React.StrictMode>
    );
}

export default App;
