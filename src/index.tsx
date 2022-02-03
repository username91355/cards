import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {App} from './components/app/App';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);