import blobBlueStart from "../assets/blob-blue-start.png";
import blobYellowStart from "../assets/blob-yellow-start.png";

export default function Start(props) {
  return (
    <div className="start">
      <img className="blob-blue" src={blobBlueStart} alt="blue blob shape" />
      <img
        className="blob-yellow"
        src={blobYellowStart}
        alt="yellow blob shape"
      />
      <div className="start--inner-container">
        <h1 className="start--title">Quizzical</h1>
        <h4 className="start--subtitle">How well do you know your trivia?</h4>
        <button className="start--btn">Start Quiz</button>
      </div>
    </div>
  );
}
