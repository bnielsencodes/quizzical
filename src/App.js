import { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import QAndA from "./components/QAndA";
import Start from "./components/Start";
import Footer from "./components/Footer";
import "./App.css";
// import { nanoid } from "nanoid";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [triviaData, setTriviaData] = useState([]);

  function startGame() {
    setGameStarted(true);
  }

  // fetch data from Open TDB API
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      .then((res) => res.json())
      .then((data) => setTriviaData(data.results));
  }, [gameStarted]);


  // map through API data fetched to create QAndA components
  const qAndAElements = triviaData.map((item) => {
    return <QAndA key={item.id} item={item} gameStarted={gameStarted} />;
  });

  return (
    <main>
      {gameStarted ? (
        <Quiz qAndAElements={qAndAElements} />
      ) : (
        <Start startGame={startGame} />
      )}
      <Footer />
    </main>
  );
}
