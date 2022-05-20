import { useEffect, useState } from "react";
import "../styles/gamelevel.css";
import SelectionMenu from "./SelectionMenu";
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";

const GameLevel = () => {
  const level = useParams().level;

  const [menuX, setMenuX] = useState(0);
  const [menuY, setMenuY] = useState(0);
  const [shouldDisplayMenu, setShouldDisplayMenu] = useState(false);
  const [levelData, setLevelData] = useState(false);
  const [lastClickX, setLastClickX] = useState(-10);
  const [lastClickY, setLastClickY] = useState(-10);

  useEffect(() => {
    const dataQuery = query(
      collection(getFirestore(), "levelData"),
      where("level", "==", 1),
      limit(1)
    );

    getDocs(dataQuery).then((dataSnapshot) => {
      setLevelData(dataSnapshot.docs[0].data());
    });
  }, []);

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
        <img src={require("../assets/level-1.jpg")} alt="level 1" />
      </div>
    </div>
  );
};

export default GameLevel;
