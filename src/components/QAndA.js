import { useState, useEffect } from "react";
import { decode } from "html-entities";
export default function QAndA(props) {
  const [optionsList, setOptionsList] = useState([]);
  const [question] = useState(formatData(props.item.question));

  /* Decode html entities to display characters. */
  function formatData(data) {
    return decode(data);
  }

  // call options() function when game started
  useEffect(() => {
    options();
  }, [props.startGame]);

  // reorders array of correct/incorrect answers and sets optionsList state
  function options() {
    let correctAnswer = formatData(props.item.correct_answer);
    let incorrectAnswers = props.item.incorrect_answers.map((answer) =>
      formatData(answer)
    );
    let options = incorrectAnswers;
    options.splice(
      Math.floor(Math.random() * (options.length + 1)),
      0,
      correctAnswer
    );
    setOptionsList(options);
  }

  return (
    <div className="q-and-a">
      <p className="question">{question}</p>
    </div>
  );
}
