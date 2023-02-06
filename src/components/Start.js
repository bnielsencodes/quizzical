import blobBlue from "../assets/blob-blue.png";
import blobYellow from "../assets/blob-yellow.png";
import blobBlueStart from "../assets/blob-blue-start.png";
import blobYellowStart from "../assets/blob-yellow-start.png";
import Footer from "./Footer";

export default function Start(props) {
  return (
    <div className="start">
      <img className="blob-blue small" src={blobBlue} alt="blue blob shape" />
      <img
        className="blob-yellow small"
        src={blobYellow}
        alt="yellow blob shape"
      />
      <img
        className="blob-blue large"
        src={blobBlueStart}
        alt="blue blob shape"
      />
      <img
        className="blob-yellow large"
        src={blobYellowStart}
        alt="yellow blob shape"
      />
      <div className="start--inner-container">
        <h1 className="start--title">Quizzical</h1>
        <h4 className="start--subtitle">How well do you know your trivia?</h4>
        <button className="start--btn" onClick={props.startGame}>
          Start Quiz
        </button>
        <Footer />
      </div>
    </div>
  );
}
