import Input from "../../components/Input/Input";
import {HomeWork09Componets, Result, ResultBlock} from './styles'
import Button from "../../components/Button/Button";
import {ChangeEvent, useState} from "react";
import * as events from "node:events";

function HomeWork09() {
    const [firstNote, setFirstNote] = useState<string>(``)
    const [secondNote, setSecondNote] = useState<string>(``)
    const [isShowInputResults, setIsShowInputReasult] = useState<boolean>(false)
    const [resultFirstNote, setResultFirstNote] = useState<string>(``)

    const firstNoteOnchange = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstNote(event.target.value)
    }

    const secondNoteOnchange = (event: ChangeEvent<HTMLInputElement>) => {
        setSecondNote(event.target.value)
        setResultFirstNote(firstNote)

    }

    const changeResultVisible = () => {
        setIsShowInputReasult(!isShowInputResults)

    }


    return (
        <HomeWork09Componets>
            <input name='first-note' placeholder='First note' value={firstNote} onChange={firstNoteOnchange}/>
            <input name='first-note' placeholder='First note' value={secondNote} onChange={secondNoteOnchange}/>
            <Button name='Show result' onClick={changeResultVisible}/>
            <ResultBlock>
                <Result>{firstNote}</Result>
                <Result>{secondNote}</Result>


            </ResultBlock>
        </HomeWork09Componets>)

}

export default HomeWork09



