import React from 'react';
import {ClientsWrapper, StyledLink} from "./styles";

function Clients() {
    return (
        <ClientsWrapper>
            <h1>Clients</h1>
            <ul>
                <li><StyledLink to='cargill'>Cargill</StyledLink></li>
                <li><StyledLink to='cofco'>Cofco</StyledLink></li>
                <li><StyledLink to='nibulon'>Nibulon</StyledLink></li>
            </ul>

        </ClientsWrapper>
    );
}

export default Clients;