import React, {useState} from 'react';
import s from './Test.module.css';
import {SuperButton} from '../../components/common/SuperButton/SuperButton';
import {SuperTextInput} from '../../components/common/SuperTextInput/SuperTextInput';
import {SuperInput} from '../../components/common/SuperInput/SuperInput';
import {SuperRadio} from '../../components/common/SuperRadio/SuperRadio';
import {SuperSelect} from '../../components/common/SuperSelect/SuperSelect';
import {SuperCheckbox} from '../../components/common/SuperCheckbox/SuperCheckbox';
import {SuperLink} from '../../components/common/SuperLink/SuperLink';
import {LargeContainer} from '../../components/lagre-container/LargeContainer';
import {Preloader} from '../../components/common/Preloader/Preloader';

export const TestComponents: React.FC = () => {

    const
        [checkedRadio, setCheckedRadio] = useState(false),
        [checked, setChecked] = useState(false);

    return (
        <div>
            <LargeContainer>
                <div>
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
                    <SuperTextInput label={'Text'} className={s.inputText}/>
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
                    <hr/>
                    <SuperLink to={'#'} children={'test link'}/>
                    <Preloader/>
                </div>
            </LargeContainer>
        </div>
    );
};