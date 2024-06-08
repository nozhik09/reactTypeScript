import {UserWrapper,Title} from "./styles";
import Button from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";








function User(){
    const navigate = useNavigate();

    const goHomePage = ()=>{
        navigate('/')
    }

    return( <UserWrapper><Title>User Page</Title>
    <Button name='Go to Home page' onClick={goHomePage} />

        </UserWrapper>



    )



}
export default User