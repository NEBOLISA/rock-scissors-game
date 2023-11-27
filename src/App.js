import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import Rules from "./components/RulesModal";
import {
  PlayProvider,
  usePlayContext,
} from "./components/contexts/PlayContext";
import Picked from "./components/Picked";

function App() {
  const initialTry = parseInt(localStorage.getItem("remTry")) || 4;
  const { data, setData, setPoints } = usePlayContext();
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("");
  const [remTry, setRemTry] = useState(initialTry);
  const displayModal = () => {
    setShowModal(true);
  };
  useEffect(() => {
    localStorage.setItem("remTry", remTry);
  }, [remTry]);
  const handleMoveBackToBoard = () => {
    setData("");
    setStatus("");
  };
  const hideModal = () => {
    setShowModal(false);
  };
  const handleReset = () => {
    setPoints(0);
    localStorage.setItem("points", 0);
    localStorage.setItem("lossCount", 0);
    setRemTry(4);
    localStorage.setItem("remTry", 4);
    setData("");
    setStatus("");
  };
  return (
    <div className="App">
      <Header remTry={remTry} />

      {data !== "" ? (
        <Picked
          setRemTry={setRemTry}
          onClick1={handleReset}
          onClick={handleMoveBackToBoard}
          status={status}
          setStatus={setStatus}
        />
      ) : (
        <Board />
      )}

      <div className="rule_btn_div">
        <button className="rules_btn" onClick={displayModal}>
          RULES
        </button>
      </div>
      <Rules
        onClick={hideModal}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default App;
