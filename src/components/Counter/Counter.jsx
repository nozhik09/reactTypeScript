import { useState } from "react";
import "./styles.css";
import Button from "../Button/Button";

function Counter() {
  const [count, setCount] = useState(5);

  // const count =result[0]
  // const setCount = result[1]
  console.log(count);
  console.log(setCount);

  const onMinusClick = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };
  const onPlusClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="counetr-component">
      <Button name="-" onClick={onMinusClick} />
      <div className="counetr-result">{count}</div>
      <Button name="+" onClick={onPlusClick} />
    </div>
  );
}
export default Counter;
