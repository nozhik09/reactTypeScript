import Button from "../Button/Button";
// import { useState } from "react";
import "./styles.css";
import {FeedbackProps} from "./types";
function Feedback({like , dislike,addLike,addDislike,resetResults}:FeedbackProps) {
  // const [likes, setLike] = useState(0);
  // const [disl, setDis] = useState(0);
  //
  // const like = () => {
  //   setLike((like) => like + 1);
  // };
  //
  // const dislike = () => {
  //   setDis((dis) => dis - 1);
  // };
  //
  // const resetResults = () => {
  //   setLike(0);
  //   setDis(0);

//TODO   localStorage посмотреть 

return (
    <div className="feedback-container">
        <div className="feedback-result-container">
            <div className="like-dislike-container">
                <div className="result">{like}</div>
                <Button name="Like" onClick={addLike} />
            </div>
            <div className="like-dislike-container">
                <Button name="Dislike" onClick={addDislike} />
                <div className="result">{dislike}</div>
            </div>
        </div>
        <Button name="Reset results" onClick={resetResults} />
    </div>
);
}

export default Feedback;
