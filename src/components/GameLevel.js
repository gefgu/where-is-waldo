import { useState } from "react";
import "../styles/gamelevel.css";
import SelectionMenu from "./SelectionMenu";

const GameLevel = () => {
  const [menuX, setMenuX] = useState(0);
  const [menuY, setMenuY] = useState(0);
  const [shouldDisplayMenu, setShouldDisplayMenu] = useState(false);

  const handleSelection = (e, characterSelected) => {
    e.stopPropagation();
    console.log(characterSelected);
  };

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
          console.log(e.target);
          const bounds = e.target.getBoundingClientRect();
          const x = e.clientX - bounds.left;
          const y = e.clientY - bounds.top;
          const cw = e.target.clientWidth;
          const ch = e.target.clientHeight;
          const iw = e.target.naturalWidth;
          const ih = e.target.naturalHeight;
          const xPositionOnImage = (x / cw) * iw;
          const yPositionOnImage = (y / ch) * ih;
          console.log([xPositionOnImage, yPositionOnImage]);
          setMenuX(x);
          setMenuY(y);
        }}
      >
        <SelectionMenu
          x={menuX}
          y={menuY}
          shouldDisplay={shouldDisplayMenu}
          handleSelection={handleSelection}
        />
        <img src={require("../assets/level-1.jpg")} alt="level 1" />
      </div>
    </div>
  );
};

export default GameLevel;
