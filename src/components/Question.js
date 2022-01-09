import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {

  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(() => {
if (timeRemaining!== 0){
  const intervalId = setTimeout(() => {
    console.log("running")
    setTimeRemaining(timeRemaining-1);
  }, 1000);
  
  return function() {
    console.log("cleanup")
    clearTimeout(intervalId)
  }
}
else 
    console.log("timeUp")
    handleAnswer(false)
    
  });


  // useEffect(() => {
  //   if (timeRemaining !== 0){
  //   const intervalID = setInterval(() => {
  //     console.log('running')
  //     setTimeRemaining(timeRemaining - 1)
  //   }, 1000)}
  //   else {
  //     console.log("timeUp")
  //     // setTimeRemaining(5)
  //     handleAnswer(false)
  //   }

    
  // })

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }


  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
