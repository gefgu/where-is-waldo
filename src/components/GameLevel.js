import { useState } from "react";
import "../styles/gamelevel.css";
import SelectionMenu from "./SelectionMenu";
import { Link, useParams } from "react-router-dom";

const GameLevel = ({ levelsData }) => {
  const level = +useParams().level;
  const levelData = levelsData.filter((value) => value.level === level)[0];

  const [menuX, setMenuX] = useState(0);
  const [menuY, setMenuY] = useState(0);
  const [shouldDisplayMenu, setShouldDisplayMenu] = useState(false);
  const [lastClickX, setLastClickX] = useState(-10);
  const [lastClickY, setLastClickY] = useState(-10);

  const hitTarget = (xClick, yClick, xPosition, yPosition) => {
    const withinXBoundary = xClick > xPosition - 20 && xClick < xPosition + 20;
    const whithinYBoundary = yClick > yPosition - 20 && yClick < yPosition + 20;
    if (withinXBoundary && whithinYBoundary) {
      return true;
    }
    return false;
  };

  const handleSelection = (e, characterSelected) => {
    e.stopPropagation();
    const positionOfCharacter = levelData.positions[characterSelected];
    console.log(
      hitTarget(
        lastClickX,
        lastClickY,
        positionOfCharacter.x,
        positionOfCharacter.y
      )
    );
  };

  return (
    <div className="game-container">
      <div className="level-description">
        <div className="icons">
          {levelData
            ? Object.keys(levelData.positions).map((character) => {
                return (
                  <img
                    key={character}
                    src={require(`../assets/${character}.jpg`)}
                    alt={character}
                  />
                );
              })
            : ""}
        </div>
        <p>Click to find them!</p>
        <Link to="/">
          <button className="back">Return Home</button>
        </Link>
      </div>
      <div
        className="game"
        onClick={(e) => {
          if (!shouldDisplayMenu) setShouldDisplayMenu(true);
          const bounds = e.target.getBoundingClientRect();
          const x = e.clientX - bounds.left;
          const y = e.clientY - bounds.top;
          const cw = e.target.clientWidth;
          const ch = e.target.clientHeight;
          const iw = e.target.naturalWidth;
          const ih = e.target.naturalHeight;
          const xPositionOnImage = (x / cw) * iw;
          const yPositionOnImage = (y / ch) * ih;
          setLastClickX(xPositionOnImage);
          setLastClickY(yPositionOnImage);
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
        <img
          src={require(`../assets/level-${level}.jpg`)}
          alt={`Level ${level}`}
        />
      </div>
    </div>
  );
};

export default GameLevel;
