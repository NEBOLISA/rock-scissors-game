import { useEffect, useState } from "react";
import Rock from "../Rock";
import Scissors from "../Scissors";
import "./Picked.css";
import Paper from "../Paper";
import CircularProgress from "@mui/joy/CircularProgress";
import { useCountUp } from "use-count-up";
import { usePlayContext } from "../contexts/PlayContext";

function Picked({ onClick, status, setStatus, onClick1, setRemTry }) {
  const initialCount = parseInt(localStorage.getItem("lossCount")) || 0;
  const [delayHouse, setHouseDelay] = useState(false);
  const [randomHouse, setRandomHouse] = useState(null);
  const [lossCount, setLossCount] = useState(initialCount);

  const [isLoading, setIsLoading] = useState(true);

  const { value: value1, reset: resetValue1 } = useCountUp({
    isCounting: isLoading,
    duration: 1,
    start: 0,
    end: 100,
    onComplete: () => {
      setIsLoading(false);
    },
  });

  const { data, setPoints } = usePlayContext();
  let selects;
  const house = [
    <Rock className="selected" />,
    <Scissors className="selected" />,
    <Paper className="selected" />,
  ];
  setTimeout(() => {
    setHouseDelay(true);
  }, 1000);
  const handlePointsIncrease = () => {
    setTimeout(() => {
      setPoints((prev) => prev + 1);
      setStatus("YOU WON");
    }, 1000);
  };
  const handleLoss = () => {
    setTimeout(() => {
      setStatus("YOU LOSE");
      setLossCount((prev) => prev + 1);
      setRemTry((prev) => prev - 1);
    }, 1000);
  };
  useEffect(() => {
    localStorage.setItem("lossCount", lossCount);
    if (lossCount > 3) {
      setStatus("GAME OVER");

      setTimeout(() => {
        localStorage.setItem("points", 0);
        localStorage.setItem("lossCount", 0);
      }, 0);
    }
  }, [lossCount]);
  const handleDraw = () => {
    setTimeout(() => {
      setStatus("DRAW");
    }, 1000);
  };
  useEffect(() => {
    getRandomHouse();
  }, [data]);
  useEffect(() => {
    if (randomHouse !== null) {
      checkWinOrLose();
    }
  }, [randomHouse]);

  const getRandomHouse = () => {
    const randomBetween0And2 = Math.floor(Math.random() * 3);
    setRandomHouse(randomBetween0And2);
  };

  const checkWinOrLose = () => {
    let changedSelect = house[randomHouse]?.type.name.toLowerCase();
    if (data === "rock" && changedSelect === "scissors") {
      handlePointsIncrease();
    } else if (data === "scissors" && changedSelect === "paper") {
      handlePointsIncrease();
    } else if (data === "paper" && changedSelect === "rock") {
      handlePointsIncrease();
    } else if (data === changedSelect) {
      handleDraw();
    } else if (changedSelect === undefined) {
    } else {
      handleLoss();
    }
  };

  switch (data) {
    case "rock":
      selects = <Rock className="selected" />;
      break;
    case "paper":
      selects = <Paper className="selected" />;
      break;
    case "scissors":
      selects = <Scissors className="selected" />;
      break;
    default:
      return;
  }

  return (
    <div className="picked">
      <div className="yourPick">
        <h2 className="title">YOU PICKED</h2>
        {selects}
      </div>

      <div className={status ? "status_div" : "status_div hide"}>
        {status === "GAME OVER" ? (
          <>
            {" "}
            <h1 className="status_title red">{status}</h1>
            <button className="status_play_again" onClick={onClick1}>
              RESTART GAME
            </button>
          </>
        ) : (
          <>
            {" "}
            <h1 className="status_title">{status}</h1>
            <button
              className={
                status === "YOU LOSE"
                  ? "status_play_again red"
                  : "status_play_again"
              }
              onClick={onClick}
            >
              PLAY AGAIN
            </button>
          </>
        )}
      </div>

      <div className="house_pick">
        <h2 className="title">THE HOUSE PICKED</h2>
        {delayHouse ? (
          house[randomHouse]
        ) : (
          <CircularProgress
            sx={{
              "--CircularProgress-trackThickness": "15px",
              "--CircularProgress-progressThickness": "15px",
              "--CircularProgress-size": "140px",
            }}
            determinate
            value={parseInt(value1, 10)}
          ></CircularProgress>
        )}
      </div>
    </div>
  );
}
export default Picked;
