import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameLevel from "./components/GameLevel";
import Heading from "./components/Heading";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import "./styles/app.css";

function App() {
  const app = initializeApp(firebaseConfig);

  return (
    <BrowserRouter>
      <Heading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="game">
          <Route path=":level" element={<GameLevel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
