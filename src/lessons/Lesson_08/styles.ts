import styled from "@emotion/styled";
import {css} from "@emotion/react";
interface ButtonStyledComponentsProps {
    mainButton?: boolean
}

const commonBoxStyles = css `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const Lesson08Components = styled.div`
    ${commonBoxStyles};
    gap: 20px;
    padding: 40px;

`

export const BoxInfo = styled.div`
    display: flex;
    justify-content: center;
    width: 250px;
    height: 250px;
    align-items: center;
    background-color: #6565a5;

`
export const ButtonStylesComponent = styled.button<ButtonStyledComponentsProps>`
    width: 200px;
    height: 70px;
    border: none;
    //background: indigo;
    background: ${(props)=>props.mainButton?'#A96FFC':'#FF3015'};
    border-radius: 10px;
    font-size: 24px;
    padding: 10px;
    cursor: pointer;

`









