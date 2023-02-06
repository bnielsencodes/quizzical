import blobBlue from "../assets/blob-blue.png";
import blobYellow from "../assets/blob-yellow.png";
import blobBlueStart from "../assets/blob-blue-start.png";
import blobYellowStart from "../assets/blob-yellow-start.png";
import Footer from "./Footer";

export default function Quiz(props) {
  return (
    <div className="quiz">
      <div className="q-and-a-container">{props.qAndAElements}</div>
      <button className="quiz--btn">Check Answers</button>
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
      <Footer />
    </div>
  );
}
