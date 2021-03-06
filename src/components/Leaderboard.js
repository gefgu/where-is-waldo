import LevelsDisplay from "./LevelsDisplay";
import "../styles/leaderboard.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const Leaderboard = ({ levelsData, leaderboardData }) => {
  const level = +useParams().level || 1;
  const [currentLevel, setCurrentLevel] = useState(level);
  leaderboardData = leaderboardData.filter(
    (data) => data.level === currentLevel
  );
  leaderboardData.sort((a, b) => a.time - b.time);

  const changeLevelInDisplay = (level) => {
    setCurrentLevel(level);
  };

  return (
    <div className="leaderboard">
      <div>
        <h1>Leaderboard</h1>
        <div className="buttons">
          <Link to={`/game/${currentLevel}`}>
            <button className="play">Play This Level</button>
          </Link>
          <Link to="/">
            <button className="back">Back To Home</button>
          </Link>
        </div>
      </div>
      <LevelsDisplay
        levelsData={levelsData}
        clickFunction={changeLevelInDisplay}
        displayIcons={false}
        highlight={currentLevel}
      />
      <div className="data">
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>TIME (SECONDS)</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData &&
              leaderboardData.map((data) => {
                return (
                  <tr key={data.name}>
                    <td>{data.name}</td>
                    <td>{data.time}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
