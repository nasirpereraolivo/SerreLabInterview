import React, { useState, useEffect } from "react";

function Question(props) {
  let images = {
    lizard: "images/lizard.jpg",
    octopus: "images/octopus.jpg",
    parrot: "images/parrot.jpg",
    tiger: "images/tiger.jpg",
    turtle: "images/turtle.jpg",
  };
  const animals = ["lizard", "octopus", "parrot", "tiger", "turtle"];
  let currentImage = "lizard";
  let incorrect = "octopus";
  let optionA = currentImage;
  let optionB = incorrect;

  const [showImage, setShowImage] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);

  useEffect(() => {
    NextQuestion();
  }, []);

  function chooseWrongAnswer() {
    let wrong = animals[Math.floor(Math.random() * animals.length)];
    if (wrong !== currentImage) {
      incorrect = wrong;
    } else {
      chooseWrongAnswer();
    }
  }

  function GuessButtonA() {
    if (optionA === currentImage) {
      NextQuestion();
    } else {
      console.log("u lost");
    }
    return null;
  }
  function GuessButtonB() {
    if (optionB === currentImage) {
      NextQuestion();
    } else {
      console.log("u lost");
    }
    return null;
  }

  function scrambleChoices() {
    let coin = Math.floor(Math.random() * 2);
    if (coin === 0) {
      optionA = currentImage;
      optionB = incorrect;
    } else {
      optionA = incorrect;
      optionB = currentImage;
    }
  }

  function NextQuestion() {
    currentImage = Object.keys(images)[
      Math.floor(Math.random() * Object.keys(images).length)
    ];
    chooseWrongAnswer();
    scrambleChoices();
    let displayTime = Math.random() * 1000 + 1;

    setShowImage(true);
    setShowQuestion(false);

    const timer = setTimeout(() => {
      setShowImage(false);
      setShowQuestion(true);
    }, displayTime);

    return () => clearTimeout(timer);
  }

  return (
    <>
      {showImage && <img src={images[currentImage]} alt={currentImage} />}
      <p>{currentImage}</p>
      {showQuestion && <h2>This animal is:</h2>}
      {showQuestion && <button onClick={GuessButtonA}>{optionA}</button>}
      {showQuestion && <button onClick={GuessButtonB}>{optionB}</button>}
    </>
  );
}

export default Question;