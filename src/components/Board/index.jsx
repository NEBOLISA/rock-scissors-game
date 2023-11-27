import "./Board.css";

import Rock from "../Rock";
import Paper from "../Paper";
import Scissors from "../Scissors";
function Board() {
  return (
    <div className="board">
      <Rock />
      <Paper />
      <Scissors />
    </div>
  );
}
export default Board;
