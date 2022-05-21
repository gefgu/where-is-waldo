import "../styles/selectionMenu.css";

const SelectionMenu = ({ x, y, shouldDisplay, handleSelection, levelData }) => {
  const positionStyle = {
    top: y,
    left: x,
  };

  if (!shouldDisplay) positionStyle["display"] = "none";
  if (levelData) {
    return (
      <div className="selection-menu" style={positionStyle}>
        {Object.keys(levelData.positions).map((character) => {
          return (
            <div onClick={(e) => handleSelection(e, character)} key={character}>
              <img
                src={require(`../assets/${character}.jpg`)}
                alt={character}
              />
              {character[0].toUpperCase() + character.substring(1)}
            </div>
          );
        })}
      </div>
    );
  }
};

export default SelectionMenu;
