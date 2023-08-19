import blobBlue from "../assets/blob-blue.png";
import blobYellow from "../assets/blob-yellow.png";
import blobBlueStart from "../assets/blob-blue-start.png";
import blobYellowStart from "../assets/blob-yellow-start.png";
import Footer from "./Footer";

export default function Quiz(props) {
  return (
    <div className="quiz">
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
      <div className="q-and-a-container">{props.questionElements}</div>
      <div className="check-answers">
        {props.checked && (
          <span className="score">
            You scored {props.correct}/5 correct answers
          </span>
        )}
        <button
          className="check check-answers--btn"
          onClick={props.checked ? props.playAgain : props.checkAnswers}
        >
          {props.checked ? "Play Again" : "Check Answers"}
        </button>
      </div>
      <Footer />
    </div>
  );
}
