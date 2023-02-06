import { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import QAndA from "./components/QAndA";
import Start from "./components/Start";
import { nanoid } from "nanoid";
import "./App.css";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(0);

  // start game function
  function startGame() {
    setGameStarted(true);
  }

  // shuffle array function
  function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }

  // fetch from API, create questionsArr, setQuestions
  useEffect(() => {
    async function getQuestions() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple&encode=base64"
      );
      const data = await res.json();
      let questionsArr = [];
      data.results.forEach((item) => {
        questionsArr.push({
          id: nanoid(),
          question: item.question,
          answers: shuffleArray([
            ...item.incorrect_answers,
            item.correct_answer,
          ]),
          correct: item.correct_answer,
          selected: null,
          checked: false,
        });
      });
      setQuestions(questionsArr);
    }
    getQuestions();
  }, [newGame]);

  function selectAnswer(id, answer) {
    setQuestions((questions) =>
      questions.map((question) => {
        return question.id === id
          ? { ...question, selected: answer }
          : question;
      })
    );
  }

  // map through API data fetched to create QAndA components
  const questionElements = questions
    ? questions.map((item) => {
        return (
          <QAndA
            key={item.id}
            id={item.id}
            item={item}
            selectAnswer={selectAnswer}
          />
        );
      })
    : [];

  return (
    <main>
      {gameStarted ? (
        <Quiz questionElements={questionElements} />
      ) : (
        <Start startGame={startGame} />
      )}
    </main>
  );
}
