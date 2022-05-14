import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div>
      <h1><Link to="/">Where's Waldo?</Link></h1>
      <button><Link to="leaderboard">Leaderboard</Link></button>
    </div>
  );
};

export default Heading;
