import blobBlue from "../assets/blob-blue.png";
import blobYellow from "../assets/blob-yellow.png";

export default function Quiz(props) {
  return (
    <div className="quiz">
      <img className="blob-blue" src={blobBlue} alt="blue blob shape" />
      <img className="blob-yellow" src={blobYellow} alt="yellow blob shape" />
      <div className="q-and-a-container">{props.qAndAElements}</div>
      <button className="quiz--btn">Check Answers</button>
    </div>
  );
}
