import "../styles/selectionMenu.css";

const SelectionMenu = ({ x, y, shouldDisplay, handleSelection }) => {
  const positionStyle = {
    top: y,
    left: x,
  };

  if (!shouldDisplay) positionStyle["display"] = "none";

  return (
    <div className="selection-menu" style={positionStyle}>
      <div onClick={(e) => handleSelection(e, "odlaw")}>
        <img src={require("../assets/odlaw.jpg")} alt="odlaw" />
        Odlaw
      </div>
      <div onClick={(e) => handleSelection(e, "waldo")}>
        <img src={require("../assets/waldo.jpg")} alt="waldo" />
        Waldo
      </div>
      <div onClick={(e) => handleSelection(e, "wizard")}>
        <img src={require("../assets/wizard.jpg")} alt="wizard" />
        Wizard
      </div>
    </div>
  );
};

export default SelectionMenu;
