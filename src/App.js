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

  useEffect(() => {


  // map through API data fetched to create QAndA components

  return (
      {gameStarted ? (
      ) : (
        <Start startGame={startGame} />
      )}
    </main>
  );
}
