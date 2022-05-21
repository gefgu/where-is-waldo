import "../styles/levelsDisplay.css";
import { Link } from "react-router-dom";

const LevelsDisplay = ({ levelsData }) => {
  return (
    <div className="levels-display">
      {levelsData.map((levelData) => {
        const level = levelData.level;
        return (
          <Link to={`/game/${level}`} key={level}>
            <div className="level">
              <img
                src={require(`../assets/level-${level}.jpg`)}
                alt={`Level ${level}`}
              />
              <div className="description">
                {`Level ${level}`}
                <div className="icons">
                  {Object.keys(levelData.positions).map((character) => {
                    return (
                      <img
                        key={character}
                        src={require(`../assets/${character}.jpg`)}
                        alt={character}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default LevelsDisplay;
