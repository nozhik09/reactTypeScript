import Button from "../Button/Button";
import React from "react";
import {useNavigate} from "react-router-dom";
import {GoBackButton} from "./styles";

function GoBack(){

    const navigate = useNavigate();
    const goToClients = () => {
        navigate(-1);
    };

    return (

        <GoBackButton>


            <Button name="Go To Clients" onClick={goToClients} />


        </GoBackButton>


    )


}
export default GoBack