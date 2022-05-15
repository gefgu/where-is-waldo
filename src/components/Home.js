const Home = () => {
  return (
    <div>
      <div className="levels-display">
        <div className="level">
          <img src={require("../assets/level-1.jpg")} alt="level 1" />
          <div className="description">
            Level 1
            <div className="icons"></div>
          </div>
        </div>
        <div className="level">
          <img src={require("../assets/level-2.jpg")} alt="level 2" />
          <div className="description">
            Level 2
            <div className="icons"></div>
          </div>
        </div>
        <div className="level">
          <img src={require("../assets/level-3.jpg")} alt="level 3" />
          <div className="description">
            Level 3
            <div className="icons"></div>
          </div>
        </div>
        <div className="level">
          <img src={require("../assets/level-4.jpg")} alt="level 4" />
          <div className="description">
            Level 4
            <div className="icons"></div>
          </div>
        </div>
        <div className="level">
          <img src={require("../assets/level-5.jpg")} alt="level 5" />
          <div className="description">
            Level 5
            <div className="icons"></div>
          </div>
        </div>
        <div className="level">
          <img src={require("../assets/level-6.jpg")} alt="level 6" />
          <div className="description">
            Level 6
            <div className="icons"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
