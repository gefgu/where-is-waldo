import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="levels-display">
        <div className="level">
          <img src={require("../assets/level-1.jpg")} alt="level 1" />
          <div className="description">
            Level 1
            <div className="icons">
              <img src={require("../assets/odlaw.jpg")} alt="odlaw" />
              <img src={require("../assets/waldo.jpg")} alt="waldo" />
              <img src={require("../assets/wizard.jpg")} alt="wizard" />
            </div>
          </div>
        </div>
        <div className="level">
          <img src={require("../assets/level-2.jpg")} alt="level 2" />
          <div className="description">
            Level 2
            <div className="icons">
              <img src={require("../assets/waldo.jpg")} alt="waldo" />
            </div>
          </div>
        </div>
        <div className="level">
          <img src={require("../assets/level-3.jpg")} alt="level 3" />
          <div className="description">
            Level 3
            <div className="icons">
              <img src={require("../assets/odlaw.jpg")} alt="odlaw" />
              <img src={require("../assets/waldo.jpg")} alt="waldo" />
              <img src={require("../assets/wizard.jpg")} alt="wizard" />
              <img src={require("../assets/wenda.jpg")} alt="wenda" />
            </div>
          </div>
        </div>
        <div className="level">
          <img src={require("../assets/level-4.jpg")} alt="level 4" />
          <div className="description">
            Level 4
            <div className="icons">
              <img src={require("../assets/odlaw.jpg")} alt="odlaw" />
              <img src={require("../assets/waldo.jpg")} alt="waldo" />
            </div>
          </div>
        </div>
        <div className="level">
          <img src={require("../assets/level-5.jpg")} alt="level 5" />
          <div className="description">
            Level 5
            <div className="icons">
              <img src={require("../assets/odlaw.jpg")} alt="odlaw" />
              <img src={require("../assets/waldo.jpg")} alt="waldo" />
              <img src={require("../assets/wizard.jpg")} alt="wizard" />
              <img src={require("../assets/wenda.jpg")} alt="wenda" />
            </div>
          </div>
        </div>
        <div className="level">
          <img src={require("../assets/level-6.jpg")} alt="level 6" />
          <div className="description">
            Level 6
            <div className="icons">
              <img src={require("../assets/waldo.jpg")} alt="waldo" />
            </div>
          </div>
        </div>
      </div>

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
