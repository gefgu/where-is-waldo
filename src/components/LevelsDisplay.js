import { useEffect, useState } from "react";
import "../styles/levelsDisplay.css";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import { Link } from "react-router-dom";

const LevelsDisplay = () => {
  const [levelsData, setLevelsData] = useState([]);

  useEffect(() => {
    const getLevelData = async () => {
      const levelsQuery = query(
        collection(getFirestore(), "levelData"),
        orderBy("level", "asc")
      );

      const levelsSnapshot = await getDocs(levelsQuery);
      let newLevelData = [];
      levelsSnapshot.forEach((level) => {
        newLevelData.push(level.data());
      });
      setLevelsData(newLevelData);
    };
    getLevelData();
  }, []);

  return (
    <div className="levels-display">
      {levelsData.map((levelData) => {
        const level = levelData.level;
        console.log(levelData);
        return (
          <Link to={`/game/${level}`} key={level}>
            <div className="level">
              <img
                src={require(`../assets/level-${level}.jpg`)}
                alt={`Level ${level}`}
              />
              <div className="description">
                {`Level ${level}`}
                <div className="icons">
                  {Object.keys(levelData.positions).map((character) => {
                    return (
                      <img
                        key={character}
                        src={require(`../assets/${character}.jpg`)}
                        alt={character}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default LevelsDisplay;
