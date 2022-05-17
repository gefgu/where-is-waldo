import "../styles/gamelevel.css";

const GameLevel = () => {
  return (
    <div className="game-container">
      <div className="level-description">
        <div className="icons">
          <img src={require("../assets/odlaw.jpg")} alt="odlaw" />
          <img src={require("../assets/waldo.jpg")} alt="waldo" />
          <img src={require("../assets/wizard.jpg")} alt="wizard" />
        </div>
        <button className="back">Return Home</button>
      </div>
      <div className="game">
        <img src={require("../assets/level-1.jpg")} alt="level 1" />
      </div>
    </div>
  );
};

export default GameLevel;
