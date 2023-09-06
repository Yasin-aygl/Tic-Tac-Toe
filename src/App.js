import { useState, useEffect } from "react";
// COMPONENTS
import { Cell } from "./components/Cell";
// STYLE
import "./styles.css";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState(null);

  const message = "it is now " + go + "'s go.";

  // console.log(cells);

  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    let circleWins = false;
    let crossWins = false;

    winningCombos.forEach((array) => {
      if (array.every((cell) => cells[cell] === "circle")) {
        circleWins = true;
      }
      if (array.every((cell) => cells[cell] === "cross")) {
        crossWins = true;
      }
    });

    if (circleWins) {
      setWinningMessage("Circle won! Press restart to play again.");
    } else if (crossWins) {
      setWinningMessage("Cross won! Press restart to play again.");
    } else if (!cells.includes("")) {
      setWinningMessage("It's a draw! Press restart to play again.");
    }
  };

  const restartGame = () => {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setGo("circle");
    setWinningMessage(null);
  };

  useEffect(() => {
    checkScore();
  }, [cells, winningMessage]);

  return (
    <div className="App">
      <h1 style={{ color: "white", fontSize: "40px" }}>Tic Tac Toe</h1>
      <div className="game-board">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            setCells={setCells}
            go={go}
            setGo={setGo}
            cells={cells}
            winningMessage={winningMessage}
          />
        ))}
      </div>
      <p>{winningMessage || message}</p>
      <button onClick={restartGame}>Restart</button>
    </div>
  );
}
export default App;
