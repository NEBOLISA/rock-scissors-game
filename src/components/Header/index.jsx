import { useEffect, useState } from "react";
import { usePlayContext } from "../contexts/PlayContext";
import "./Header.css";

function Header({ remTry }) {
  const { points } = usePlayContext();
  localStorage.setItem("points", points);
  const getStoredPoints = localStorage.getItem("points");

  // setPoints(getStoredPoints);
  // useEffect(() => {

  //   setStoragePoints(getStoredPoints);
  // }, []);
  // const [storagePoints, setStoragePoints] = useState(0);

  return (
    <div className="header_wrapper">
      <div className="header">
        <div className="left_side">
          <p className="name">ROCK</p>
          <p className="name">PAPER</p>
          <p className="name">SCISSORS</p>
        </div>
        <div className="right_side">
          <div className="score_board">
            <p className="score_title score">SCORE</p>
            <h1 className="score_value score">{points}</h1>
          </div>
        </div>
      </div>
      <div className="remaining_attempts_div">
        <p className="remaining_attempts_title">
          Remaining <br /> Attempts:
        </p>
        <p className="remaining_attempts_value"> {remTry}</p>
      </div>
    </div>
  );
}
export default Header;
