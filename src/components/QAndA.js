// import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { decode as atob } from "base-64";

export default function QAndA(props) {
  let answers = props.item.answers;

  function handleSelectAnswer(answer) {
    if (props.item.checked) {
      return;
    }
    props.selectAnswer(props.id, answer);
  }

  const answerElements = answers.map((answer) => {
    let id = null;
    if (props.item.checked) {
      if (props.item.correct === answer) {
        id = "correct";
      } else if (props.item.selected === answer) {
        id = "incorrect";
      } else {
        id = "not-selected";
      }
    }
    return (
      <button
        key={nanoid()}
        id={id}
        className={
          answer === props.item.selected ? "answer selected" : "answer"
        }
        onClick={() => handleSelectAnswer(answer)}
      >
        {atob(answer)}
      </button>
    );
  });

  return (
    <div className="q-and-a">
      <p className="question">{atob(props.item.question)}</p>
      <div className="answers-container">{answerElements}</div>
    </div>
  );
}
