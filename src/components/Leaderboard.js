import LevelsDisplay from "./LevelsDisplay";
import "../styles/leaderboard.css";
import { Link } from "react-router-dom";

const Leaderboard = ({ levelsData }) => {
  return (
    <div className="leaderboard">
      <div>
        <h1>Leaderboard</h1>
        <div className="buttons">
          <button className="play">Play This Level</button>
          <Link to="/">
            <button className="back">Back To Home</button>
          </Link>
        </div>
      </div>
      <LevelsDisplay levelsData={levelsData} />
      <div className="data">
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>TIME (SECONDS)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>User 1</td>
              <td>1.245</td>
            </tr>
            <tr>
              <td>User 2</td>
              <td>1.245</td>
            </tr>
            <tr>
              <td>User 3</td>
              <td>1.245</td>
            </tr>
            <tr>
              <td>User 4</td>
              <td>1.245</td>
            </tr>
            <tr>
              <td>User 5</td>
              <td>1.245</td>
            </tr>
            <tr>
              <td>User 6</td>
              <td>1.245</td>
            </tr>
            <tr>
              <td>User 7</td>
              <td>1.245</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
