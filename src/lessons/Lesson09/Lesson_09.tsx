import {ChangeEvent, useState, useEffect} from "react";
import {Lesson09Component, Result ,Img} from "./styles";
import Input from 'components/Input/Input'
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

function Lesson09() {
    const [inputValue, setInputValue] = useState<string>('');
    const [inputValue2, setInputValue2] = useState<string>('');
const [dogImageUrl, setDogImageUrl] = useState<string>(``)



    const getDogPhoto = async () => {
        try {
            const responce = await fetch('https://dog.ceo/api/breeds/image/random')
            const result = await responce.json()
            console.log(result)

            if (!responce.ok) {
                throw Object.assign(new Error('API error'), {error: result})


            } else {
              setDogImageUrl(result.message)


            }




        } catch (error) {
            console.log('Error')


        }


    }

    useEffect(() => {
        getDogPhoto()
    }, []);
// Выполняем функцию при изменении знач в первом поле

    useEffect(() => {
        getDogPhoto()
    }, [inputValue]);


    //Вызов useEffect в момент создания компонента
    // useEffect(() => { console.log('Mounting') }, [])

    // //Вызов useEffect в момент изменения значения в первом поле
    // useEffect(() => { console.log('Updating') }, [inputValue, inputValue2])

    // //Вызов useEffect в момент перед удалением компонента (размонтированием)
    // useEffect(() => {
    //   return () => {
    //     console.log('Unmouting')
    //   }
    // }, [])

    const onChangeExample1Input = (event: ChangeEvent<HTMLInputElement>) => {
        // console.log(event.target.value)
        setInputValue(event.target.value)
    }

    const onChangeExample2Input = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue2(event.target.value)
    }

    return (
        <Lesson09Component>
            {/* //неконтролируемый компонент */}
            {/* <Input name='example1' placeholder='Uncontrol' /> */}
            {/* контролируемый компонент */}
            <Input name='example1-control' placeholder="Ex1 control" value={inputValue}
                   onChange={onChangeExample1Input}/>
            <Result>{inputValue}</Result>
            <Input name='example2-control' placeholder="Ex2 control" value={inputValue2}
                   onChange={onChangeExample2Input}/>
            <Result>{inputValue2}</Result>
            <Img src={dogImageUrl}/>

        </Lesson09Component>
    )
}

export default Lesson09