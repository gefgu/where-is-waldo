import { Link } from "react-router-dom";
import "../styles/heading.css";

const Heading = () => {
  return (
    <div className="heading">
      <div className="title">
        <Link to="/">
          <img src={require("../assets/waldo-heading.jpg")} alt="Waldo" />
          <span className="blue">Where's</span>{" "}
          <span className="red">Waldo?</span>
        </Link>
      </div>
    </div>
  );
};

export default Heading;
