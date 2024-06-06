import { InputContainer, Label, InputElement } from "./styles";
import { InputProps } from "./types";

function Input({ name, placeholder, type = "text", label, value, onChange }: InputProps) {
    console.log('Input update')
    return (
        <InputContainer>
            <Label>{label}</Label>
            <InputElement
                name={name}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
            />
        </InputContainer>
    );
}

export default Input;