import React from 'react';
import Button from '../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import {CofcoWraper} from "./styled";
import GoBack from "../../../components/goBack/GoBack";

function Cofco() {


    return (
        <CofcoWraper>
            <h1>Cofco</h1>
            <GoBack/>
        </CofcoWraper>
    );
}

export default Cofco;