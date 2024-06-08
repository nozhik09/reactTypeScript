import {Footer, Header, HeaderLogo, LayoutComponent, Main, NavContainer, StyledNavLink} from "./styles";
import avatar from "assets/avatar.jpg";
import {LayoutProps} from "./types";


function Layaout({children}: LayoutProps) {
    return (
        <LayoutComponent>

            <Header>
                <HeaderLogo
                    src='https://cdn.iz.ru/sites/default/files/styles/900x600/public/photo_item-2022-10/1666271042.jpg?itok=e04DvWrq'/>
                <NavContainer>
                    <StyledNavLink to='/'
                                   style={({isActive}) =>
                                       ({textDecoration: isActive ? 'underline' : 'none'})}>
                        Home
                    </StyledNavLink>
                    <StyledNavLink to='/user' style={({isActive}) =>
                        ({textDecoration: isActive ? 'underline' : 'none'})}>User</StyledNavLink>
                    <StyledNavLink to='/about' style={({isActive}) =>
                        ({textDecoration: isActive ? 'underline' : 'none'})}>About</StyledNavLink>


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