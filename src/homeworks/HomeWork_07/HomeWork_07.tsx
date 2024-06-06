import Feedback from "../../components/Feedback/Feedback";
import {useState} from "react";

function Homework07() {
    const [like, setLike] = useState<number>(0);
    const [dislLike, setDislike] = useState<number>(0);

    const addlike = () => {
        setLike((like) => like + 1);
    };

    const addDislike = () => {
        setDislike((dis) => dis - 1);
    };

    const resetResults = () => {
        setLike(0);
        setDislike(0);
    };




    return( <div className={"lesson07-component"}><Feedback
    like={like}
    dislike={dislLike}
    addLike={addlike}
    addDislike={addDislike}
    resetResults={resetResults}

    />
    </div>)



}
export default Homework07;