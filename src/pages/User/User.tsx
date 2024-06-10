import {UserWrapper, Title} from "./styles";
import Button from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


function User() {
    const navigate = useNavigate();

    const goHomePage = () => {
        navigate('/')
    }
useEffect(()=>{

    return ()=> {

        console.log('Component User unmount')

    }

},[])

    return (<UserWrapper>
            <Title>User Page</Title>
            <Button name='Go to Home page' onClick={goHomePage}/>

        </UserWrapper>


    )


}

export default User