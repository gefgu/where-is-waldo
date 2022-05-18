import { useState } from "react";
import "../styles/gamelevel.css";
import SelectionMenu from "./SelectionMenu";

const GameLevel = () => {
  const [menuX, setMenuX] = useState(0);
  const [menuY, setMenuY] = useState(0);
  const [shouldDisplayMenu, setShouldDisplayMenu] = useState(false);

  return (
    <div className="game-container">
      <div className="level-description">
        <div className="icons">
          <img src={require("../assets/odlaw.jpg")} alt="odlaw" />
          <img src={require("../assets/waldo.jpg")} alt="waldo" />
          <img src={require("../assets/wizard.jpg")} alt="wizard" />
        </div>
        <p>Click to find them!</p>
        <button className="back">Return Home</button>
      </div>
      <div
        className="game"
        onClick={(e) => {
          if (!shouldDisplayMenu) setShouldDisplayMenu(true);
          const bounds = e.target.getBoundingClientRect();
          setMenuX(e.clientX - bounds.left);
          setMenuY(e.clientY - bounds.top);
        }}
      >
        <SelectionMenu x={menuX} y={menuY} shouldDisplay={shouldDisplayMenu} />
        <img src={require("../assets/level-1.jpg")} alt="level 1" />
      </div>
    </div>
  );
};

export default GameLevel;
