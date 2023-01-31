import { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import QAndA from "./components/QAndA";
import Start from "./components/Start";
import "./App.css";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [newGame, setNewGame] = useState(true);

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

  return (
      {gameStarted ? (
      ) : (
        <Start startGame={startGame} />
      )}
    </main>
  );
}
