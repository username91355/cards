import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import {SmallContainer} from "../../components/small-container/SmallContainer";
import EnteringNewPassword from "./EnteringNewPassword";

const EnteringNewPasswordCont = () => {

    const params = useParams();
    const [password, setPassword] = useState('');

    const setNewPassword = () => {

    }

    return (
        <SmallContainer>
            <EnteringNewPassword password={password}
                                 setPassword={setPassword}
                                 setNewPassword={setNewPassword}/>
        </SmallContainer>
    );
};

export default EnteringNewPasswordCont;