import styled from "@emotion/styled";

export const Lesson10Components = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    justify-content: center;
    gap: 20px;
    flex: 1;
    
`

export const Fact = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow-y: auto; 
    max-height: 700px; 
    background-color: darkblue;
    
    
    


`

export const FactItem = styled.div`
    margin-bottom: 10px;
    background-color: #288cd3;
    font-size: 30px;


`

export const Loader = styled.div`
    width: 48px;
    height: 48px;
    border: 5px solid #fff;
    border-bottom-color: #ff3d00;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 0.7s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
   

`

