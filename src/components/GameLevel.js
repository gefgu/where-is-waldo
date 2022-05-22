import { useState, useRef } from "react";
import "../styles/gamelevel.css";
import SelectionMenu from "./SelectionMenu";
import { Link, useParams } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const GameLevel = ({ levelsData, checkIfNameInLeadearboardIsRepeated }) => {
  const level = +useParams().level;
  const levelData = levelsData.filter((value) => value.level === level)[0];

  const [menuX, setMenuX] = useState(0);
  const [menuY, setMenuY] = useState(0);
  const [shouldDisplayMenu, setShouldDisplayMenu] = useState(false);
  const [lastClickX, setLastClickX] = useState(-10);
  const [lastClickY, setLastClickY] = useState(-10);
  const [hits, setHits] = useState({});

  const startTime = useRef(Date.now());

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
    const hit = hitTarget(
      lastClickX,
      lastClickY,
      positionOfCharacter.x,
      positionOfCharacter.y
    );

    const hitObject = hits;

    if (
      !Object.keys(hits).includes(characterSelected) ||
      hits[characterSelected] === false
    ) {
      hitObject[characterSelected] = hit;
    }

    setShouldDisplayMenu(false);
    setHits(hitObject);
    const numberOfRightHits = Object.keys(hitObject).reduce(
      (previous, current) => {
        if (hitObject[current]) {
          return previous + 1;
        }
        return previous;
      },
      0
    );
    if (numberOfRightHits === Object.keys(levelData.positions).length) {
      endGame();
    }
  };

  const saveScore = async (name, time) => {
    try {
      await addDoc(collection(getFirestore(), "leaderboard"), {
        name: name,
        time: time,
        level: level,
      });
    } catch (error) {
      console.error("Error writing new score to Firebase Database", error);
    }
  };

  const endGame = () => {
    const finalTime = (Date.now() - startTime.current) / 1000; // To milliseconds to seconds
    alert(`Win time: ${finalTime} Seconds`);
    let name;
    do {
      name = prompt("What's Your Name: (For Leaderboard)");
    } while (checkIfNameInLeadearboardIsRepeated(name, level));
    // Add Form
    // Add X mark in hit spots

    if (name) {
      saveScore(name, finalTime);
    }
  };

  return (
    <div className="game-container">
      <div className="level-description">
        <div className="icons">
          {levelData
            ? Object.keys(levelData.positions).map((character) => {
                return (
                  <div
                    key={character}
                    className={hits[character] ? "hit" : "to-hit"}
                  >
                    <img
                      src={require(`../assets/${character}.jpg`)}
                      alt={character}
                    />
                    {character[0].toUpperCase() + character.substring(1)}
                  </div>
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
          // console.log([xPositionOnImage, yPositionOnImage]);
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
          levelData={levelData}
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
