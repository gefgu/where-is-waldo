import "../styles/selectionMenu.css";

const SelectionMenu = ({ x, y, shouldDisplay }) => {
  const positionStyle = {
    top: y,
    left: x,
  };

  if (!shouldDisplay) positionStyle["display"] = "none";

  return (
    <div className="selection-menu" style={positionStyle}>
      <p>MENU</p>
    </div>
  );
};

export default SelectionMenu;
