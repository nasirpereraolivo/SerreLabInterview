import Question from "./Question";

function StartScreen(props) {
    function turnOn(){
        props.setShowQuestions(true)
        props.setShowStart(false)
    }
  return (
    <>
    <h2>Thank you for participating</h2>
    <p>You will be shown an image. When prompted, choose the answer choice that identifies the image.</p>
    <button onClick={turnOn}>Begin</button>
    </>
  )
  
}


export default StartScreen;