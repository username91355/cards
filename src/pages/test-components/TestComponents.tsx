import React, {useState} from 'react';
import {SuperButton} from "../../components/common/SuperButton/SuperButton";
import {SuperTextInput} from "../../components/common/SuperTextInput/SuperTextInput";
import {SuperInput} from "../../components/common/SuperInput/SuperInput";
import {SuperRadio} from "../../components/common/SuperRadio/SuperRadio";
import {SuperSelect} from "../../components/common/SuperSelect/SuperSelect";
import {SuperCheckbox} from "../../components/common/SuperCheckbox/SuperCheckbox";

const TestComponents = () => {
    const [checkedRadio, setCheckedRadio] = useState(false)
    const [checked, setChecked] = useState(false)
    return (
        <div>
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
            <SuperRadio children={'First'} checked={checkedRadio}
                        onChange={() => setCheckedRadio(!checkedRadio)}/>
            <SuperRadio children={'Second'} checked={true}/>
            <hr/>
            <SuperSelect childrenArray={['Moscow', 'London', 'Berlin']}/>
            <hr/>
            <SuperCheckbox children={'First checkbox'} checked={checked} onChange={() => setChecked(!checked)}/>
            <SuperCheckbox checked={true} children={'Second checkbox'}/>
        </div>
    );
};

export default TestComponents;