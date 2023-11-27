import "./Rock.css";
import rock from "../../images/icon-rock.svg";
import { usePlayContext } from "../contexts/PlayContext";
function Rock() {
  const { data, setData } = usePlayContext();
  const handleClick = () => {
    setData("rock");
  };
  return (
    <div
      className={data === "" ? "rock" : "rock selected"}
      onClick={handleClick}
    >
      <div className="first_layer">
        <img src={rock} alt="rock" />
      </div>
    </div>
  );
}
export default Rock;
