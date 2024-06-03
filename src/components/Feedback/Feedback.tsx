import Button from "../Button/Button";
import { useState } from "react";
import "./styles.css";
function Feedback() {
  const [likes, setLike] = useState(0);
  const [disl, setDis] = useState(0);

  const like = () => {
    setLike((like) => like + 1);
  };

  const dislike = () => {
    setDis((dis) => dis - 1);
  };

  const resetResults = () => {
    setLike(0);
    setDis(0);
  };
//TODO   localStorage посмотреть 

  return (
    <div className="feedback_container">
      <Button name="like" onClick={like} />
      <div>{likes}</div>
      <Button name="dislike" onClick={dislike} />
      <div>{disl}</div>
      <Button name="Reset Results" onClick={resetResults} />
    </div>
  );
}

export default Feedback;
