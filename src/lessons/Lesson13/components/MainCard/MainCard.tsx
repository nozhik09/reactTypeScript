import {MainCardTitle, MainCardWrapper} from "./styles";
import Section from "../Section/Section";
import {createContext, useState} from "react";
import {UserData} from "./types";
import Content from "../Content/Content";
import {date} from "yup";



export const MainCardContext = createContext<UserData>({
    firstName: '',
    lastName: '',
    age: 0



})

    function MainCard() {



    const [userData, setUserData] = useState<UserData>({
        firstName: 'Bart',
        lastName: 'Simpson',
        age: 12
    })


    return (


        <MainCardContext.Provider value={userData}>
        <MainCardWrapper>

            <MainCardTitle>Main Card</MainCardTitle>
            <Section/>

        </MainCardWrapper>
        </MainCardContext.Provider>

    )


}

export default MainCard