import "./styles.css";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

function LoginForm() {
    return (
        <div className="login-form-wrapper">
            <div className="login-form-title">Login form</div>
            <div className="inputs-container">
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
            </div>
        </div>
    );
}

export default LoginForm;