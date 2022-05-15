import { Link } from "react-router-dom";
import "../styles/heading.css";

const Heading = () => {
  return (
    <div className="heading">
      <h1 className="title">
        <Link to="/"><span className="blue">Where's</span> <span className="red">Waldo?</span></Link>
      </h1>
    </div>
  );
};

export default Heading;
