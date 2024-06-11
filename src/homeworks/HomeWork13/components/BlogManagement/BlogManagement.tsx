import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import {ChangeEvent, createContext, useState} from "react";
import {BlogManagmentContainer} from "./styles";



export const PostContext = createContext<string>(' ')

function BlogManagement() {

    const [postValue,setPostValue] = useState<string>('')
    const onChangePostValue = (event:ChangeEvent<HTMLInputElement>) =>{
        setPostValue(event.target.value)

    }
    const [post,setPost] = useState<string>(' ')

    const onPost = ()=>{
        setPost(postValue)


    }

    return (

        <PostContext.Provider value={post}>
        <BlogManagmentContainer>
            <Input name='name' value={postValue} onChange={onChangePostValue} placeholder='Post'/>

            <Button name='Запостить' onClick={onPost}/>


        </BlogManagmentContainer>
        </PostContext.Provider>

    )


}