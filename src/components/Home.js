import { Link } from "react-router-dom";
import "../styles/home.css";
import LevelsDisplay from "./LevelsDisplay";

const Home = ({ levelsData }) => {
  return (
    <div className="home">
      <LevelsDisplay levelsData={levelsData} />

      <div className="leaderboard-card">
        <div>
          <h3>Are you a Waldo expert?</h3>
          <h3 className="red">View the leaderboard</h3>
        </div>
        <Link to="leaderboard">
          <button className="leaderboard-button">View Leaderboard</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
