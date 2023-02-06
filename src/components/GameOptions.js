export default function GameOptions(props) {
  return (
    <div className="game-options">
      <div className="select-container">
        <label className="select-label" htmlFor="category">
          Category:
        </label>
        <select
          name="category"
          id="category"
          className="select"
          value={props.gameOptions.category}
        >
        </select>
      </div>
      <div className="select-container">
        <label className="select-label" htmlFor="difficulty">
          Difficulty:
        </label>
        <select
          name="difficulty"
          id="difficulty"
          className="select"
          value={props.gameOptions.difficulty}
        >
        </select>
      </div>
      <div className="select-container">
        <label className="select-label" htmlFor="type">
          Type of questions:
        </label>
        <select
          name="type"
          id="type"
          className="select"
          value={props.gameOptions.type}
        >
        </select>
      </div>
    </div>
  );
}
