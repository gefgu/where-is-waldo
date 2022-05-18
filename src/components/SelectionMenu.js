import "../styles/selectionMenu.css";

const SelectionMenu = ({ x, y }) => {
  const positionStyle = {
    top: y,
    left: x,
  };

  return (
    <div className="selection-menu" style={positionStyle}>
      <p>MENU</p>
    </div>
  );
};

export default SelectionMenu;
