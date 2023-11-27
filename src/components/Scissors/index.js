import "./Scissors.css";
import scisscors from "../../images/icon-scissors.svg";
import { usePlayContext } from "../contexts/PlayContext";
function Scissors() {
  const { data, setData } = usePlayContext();
  const handleClick = () => {
    setData("scissors");
  };
  return (
    <div
      className={data === "" ? "scissors" : "scissors selected"}
      onClick={handleClick}
    >
      <div className="first_layer">
        <img src={scisscors} alt="scissors" />
      </div>
    </div>
  );
}
export default Scissors;
