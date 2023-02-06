export default function GameOptions(props) {
  return (
    <div className="game-options">
      <div className="select-container">
        <label className="select-label" htmlFor="category">
          Category:
        </label>
      </div>
      <div className="select-container">
        <label className="select-label" htmlFor="difficulty">
          Difficulty:
        </label>
      </div>
      <div className="select-container">
        <label className="select-label" htmlFor="type">
          Type of questions:
        </label>
      </div>
    </div>
  );
}
