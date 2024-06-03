import "./styles.css";
import {InputProps} from "./types";
function Input({ name, placeholder, type = "text", label }: InputProps) {
  return (
    <div className="input-container">
      <label className="label">{label}</label>
      <input className="enput-element" name={name} placeholder={placeholder} type={type} />
    </div>
  );
}
export default Input;
