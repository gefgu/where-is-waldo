import "../styles/levelsDisplay.css";

const LevelsDisplay = ({
  levelsData,
  clickFunction,
  displayIcons = true,
  highlight,
}) => {
  return (
    <div className="levels-display">
      {levelsData.map((levelData) => {
        const level = levelData.level;
        return (
          <div
            className={`level${level === highlight ? " highlight" : ""}`}
            onClick={() => {
              clickFunction(level);
            }}
            key={level}
          >
            <img
              src={require(`../assets/level-${level}.jpg`)}
              alt={`Level ${level}`}
            />
            <div className="description">
              {`Level ${level}`}
              <div className="icons">
                {displayIcons &&
                  Object.keys(levelData.positions).map((character) => {
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
        );
      })}
    </div>
  );
};

export default LevelsDisplay;
