import "./styles.css";
function Button({name='Get', isPrimary = true}) {
  // для вариантов 1-3
  // const sendButton = "Send";
  // const getButton = "Get";
  // const isGetButton = false;
  // const buttonClass = "button-component";

  // 1 var
  // return <button className={buttonClass}>{buttonName}</button>;

  //2var
  // return (
  //   <div>
  //   <h2>Button</h2>
  //   <button className={buttonClass}>
  //     {isGetButton ? getButton : sendButton}
  //   </button>
  //   </div>
  // );

  // 3 var
  // return (
  //   <button className={buttonClass}>
  //     {isGetButton ? getButton : sendButton}
  //   </button>
  // );

  // Вариант 4
  const buttonClass = isPrimary ? "primary_button" : "delete_button";

  return <button className={`button-component ${buttonClass}`}>{name}</button>;






  
}
export default Button;
