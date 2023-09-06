export const Cell = ({
  cell,
  id,
  setCells,
  go,
  setGo,
  cells,
  winningMessage
}) => {
  const handleClick = (e) => {
    if (winningMessage) {
      return;
    }

    const firstChild = e.target.firstChild;

    if (firstChild) {
      const firstChildClassList = firstChild.classList.value;
      const taken =
        firstChildClassList.includes("circle") ||
        firstChildClassList.includes("cross");

      if (!taken) {
        if (go === "circle") {
          firstChild.classList.add("circle");
          handleCellChange("circle");
          setGo("cross");
        }
        if (go === "cross") {
          firstChild.classList.add("cross");
          handleCellChange("cross");
          setGo("circle");
        }
      }
    }
  };

  const handleCellChange = (className) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });
    setCells(nextCells);
  };

  return (
    <div className="square" id={id} onClick={!winningMessage && handleClick}>
      <div className={cell}></div>
    </div>
  );
};
