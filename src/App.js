import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import GameLevel from "./components/GameLevel";
import Heading from "./components/Heading";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import "./styles/app.css";

function App() {
  const app = initializeApp(firebaseConfig);

  const [levelsData, setLevelsData] = useState([]);
  const [leaderboardData, setLeaderboardData] = useState([]);

  const getLeaderboardData = async () => {
    const leaderboardQuery = query(
      collection(getFirestore(), "leaderboard"),
      orderBy("level", "asc")
    );

    const leaderboardSnapshot = await getDocs(leaderboardQuery);
    let newLeaderboardData = [];
    leaderboardSnapshot.forEach((score) => {
      newLeaderboardData.push(score.data());
    });
    setLeaderboardData(newLeaderboardData);
  };
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

  useEffect(() => {
    getLevelData();
    getLeaderboardData();
  }, []);

  const isNameInLeaderboardRepeated = (name, level) => {
    const scoresFromLevel = leaderboardData.filter(
      (data) => data.level === level
    );
    const hasName =
      scoresFromLevel.filter(
        (score) => score.name.toLowerCase() === name.toLowerCase()
      ).length > 0;

    return hasName;
  };

  return (
    <BrowserRouter>
      <Heading />
      <Routes>
        <Route path="/" element={<Home levelsData={levelsData} />} />
        <Route
          path="leaderboard"
          element={
            <Leaderboard
              levelsData={levelsData}
              leaderboardData={leaderboardData}
            />
          }
        />
        <Route path="game">
          <Route
            path=":level"
            element={
              <GameLevel
                levelsData={levelsData}
                isNameInLeaderboardRepeated={isNameInLeaderboardRepeated}
                updateLeaderboardData={getLeaderboardData}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// TODOS:
// Update leaderboard after submit
// Add X mark in hit spots
// Add start button before game starts
