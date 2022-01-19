import React, {useState} from 'react';
import './App.css';
// import {Provider} from "react-redux";
// import {HashRouter} from "react-router-dom";
import {SuperButton} from "../components/SuperButton/SuperButton";
import {SuperTextInput} from "../components/SuperTextInput/SuperTextInput";
import {SuperInput} from "../components/SuperInput/SuperInput";
import {SuperCheckbox} from '../components/SuperCheckbox/SuperCheckbox';

function App() {
    const [checked, setChecked] = useState(false)
    return (
        <div className='app_wrapper' style={{width: '600px', margin: '0 auto'}}>
            {/*<Provider store={}>*/}
            {/*<HashRouter>*/}
            <hr/>
            <SuperButton title={'Test'} type={'outline'}/>
            <SuperButton title={'Delete'} type={'secondary'} onClick={() => {
                alert('Delete')
            }}/>
            <SuperButton title={'Delete'} type={'secondary'} onClick={() => {
                alert('Delete')
            }} disabled={true}/>
            <br/>
            <SuperButton title={'Accept'} type={'primary'} sizeBtn={'large'}/>
            <SuperButton title={'Accept'} type={'primary'}/>
            <SuperButton title={'Accept'} type={'primary'} sizeBtn={'small'}/>
            <hr/>
            <SuperTextInput label={'Text'}/>
            <br/>
            <SuperTextInput label={'Text'} error={'Test error'}/>
            <br/>
            <SuperInput type={'email'} label={'Enter email'} value={'test@mail.ru'}/>
            <br/>
            <SuperInput type={'password'} label={'Enter password'} value={'test'}/>
            <hr/>
            <SuperCheckbox children={'First'} checked={checked} onChange={() => setChecked(!checked)}/>
            <br/>
            <SuperCheckbox children={'Second'} checked={true}/>
            {/*</HashRouter>*/}
            {/*</Provider>*/}
        </div>
    );
}

export default App;
