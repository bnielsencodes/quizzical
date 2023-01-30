import './App.css';
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


  return (
  );
}
