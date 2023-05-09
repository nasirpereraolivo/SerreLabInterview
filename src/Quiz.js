import Question from "./Question";
import StartScreen from "./StartScreen";
import { useState } from "react";

function Quiz(){
    const [showStart, setShowStart] = useState(true);
    const [showQuestions,setShowQuestions] = useState(false);

    return(
        <>
        {showStart && <StartScreen setShowQuestions={setShowQuestions} setShowStart={setShowStart}/>}
        {showQuestions && <Question/>}
        </>
        
    )
}


export default Quiz;