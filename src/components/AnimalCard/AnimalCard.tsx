import { useState } from "react";

import "./styles.css";
import Button from "../Button/Button";

function Feedback() {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    const addLike = () => {
        setLike((prevValue) => prevValue + 1);
    };

    const addDislike = () => {
        setDislike((prevValue) => prevValue + 1);
    };

    const resetResults = () => {
        setLike(0);
        setDislike(0);
    };

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