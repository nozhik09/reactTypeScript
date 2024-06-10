import React from 'react';
import Button from '../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import {NibulonWraper} from "./styled";
import GoBack from "../../../components/goBack/GoBack";

function Nibulon() {


    return (
        <NibulonWraper>
            <h1>Nibulon</h1>
            <p></p>
            <GoBack/>
        </NibulonWraper>
    );
}

export default Nibulon;