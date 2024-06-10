import {Footer, Header, HeaderLogo, LayoutComponent, Main, NavContainer, StyledNavLink} from "./styles";
import {LayoutProps} from "./types";
import {Link} from "react-router-dom";


function Layaout({children}: LayoutProps) {
    return (
        <LayoutComponent>

            <Header>

                <Link to='/'>
                    <HeaderLogo
                        src='https://cdn.iz.ru/sites/default/files/styles/900x600/public/photo_item-2022-10/1666271042.jpg?itok=e04DvWrq'/>
                </Link>
                <NavContainer>
                    <StyledNavLink to='/' style={({isActive}) =>
                        ({textDecoration: isActive ? 'underline' : 'none'})}>Home</StyledNavLink>


                    <StyledNavLink to='/user' style={({isActive}) =>
                        ({textDecoration: isActive ? 'underline' : 'none'})}>User</StyledNavLink>


                    <StyledNavLink to='/about' style={({isActive}) =>
                        ({textDecoration: isActive ? 'underline' : 'none'})}>About</StyledNavLink>


                    <StyledNavLink to='/clients' style={({isActive}) =>
                        ({textDecoration: isActive ? 'underline' : 'none'})}>Clients</StyledNavLink>


                </NavContainer>
            </Header>
            <Main>{children}</Main>
            <Footer>
                <HeaderLogo
                    src='https://cdn.iz.ru/sites/default/files/styles/900x600/public/photo_item-2022-10/1666271042.jpg?itok=e04DvWrq'/>
            </Footer>


        </LayoutComponent>


    )

}

export default Layaout