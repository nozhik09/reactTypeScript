import {ContentComponent, DataItem} from "./styled";
import {ContentProps} from "./types";
import {useContext} from "react";
import {MainCardContext} from "../MainCard/MainCard";


function Content() {
const data = useContext(MainCardContext)
console.log(data)
    return (

        <ContentComponent>
            <DataItem>First Name:{data.firstName}</DataItem>
            <DataItem>Last Name:{data.lastName}</DataItem>
            <DataItem>Age:{data.age}</DataItem>


        </ContentComponent>


    )


}
export default Content