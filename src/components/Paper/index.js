import "./Paper.css";
import paper from "../../images/icon-paper.svg";
import { usePlayContext } from "../contexts/PlayContext";
function Paper() {
  const { data, setData } = usePlayContext();
  const handleClick = () => {
    setData("paper");
  };
  return (
    <div
      className={data === "" ? "paper_main" : "paper_main selected"}
      onClick={handleClick}
    >
      <div className="paper">
        <div className="first_layer">
          <img src={paper} alt="paper" />
        </div>
      </div>
    </div>
  );
}
export default Paper;
