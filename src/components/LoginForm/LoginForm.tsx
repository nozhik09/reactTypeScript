import { LoginFormWrapper, LoginFormTitle, InputsContainer } from "./styles";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

function LoginForm() {
    return (
        <LoginFormWrapper>
            <LoginFormTitle>Login form</LoginFormTitle>
            <InputsContainer>
                <Input
                    name="login-email"
                    type="email"
                    placeholder="Enter your email"
                    label="Email"
                />
                <Input
                    name="login-password"
                    type="password"
                    placeholder="Enter your password"
                    label="Password"
                />
                <Button name="Login" />
            </InputsContainer>
        </LoginFormWrapper>
    );
}

export default LoginForm;