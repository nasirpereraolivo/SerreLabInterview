import React, { useState, useEffect } from "react"

function Question(props)  {

    let images = ["images/lizard.jpg","images/octopus.jpg","images/parrot.jpg","images/tiger.jpg","images/turtle.jpg"]
    let currentImage = images[0]
    let displayTime = Math.random()*1000 +1
    const [showImage, setShowImage] = useState(false);
    const [showQuestion,setShowQuestion] = useState(false)


    useEffect(() => {
        setShowImage(true);
        setShowQuestion(false);
        const timer = setTimeout(() => {
            setShowImage(false);
            setShowQuestion(true);
        }, displayTime);

        return () => clearTimeout(timer);
    }, []);

    console.log('i hate react')
    return (
        <>
        {showImage && <img src = {'./images/lizard.jpg'}/>}
        {showQuestion && <h2>This animal is a:</h2>}
        {showQuestion && <button>lizard</button>}
        {showQuestion && <button>tiger</button>}
        </>
    );
  
}


export default Question;