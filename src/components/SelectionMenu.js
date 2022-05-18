import "../styles/selectionMenu.css";

const SelectionMenu = ({ x, y, shouldDisplay }) => {
  const positionStyle = {
    top: y,
    left: x,
  };

  if (!shouldDisplay) positionStyle["display"] = "none";

  return (
    <div className="selection-menu" style={positionStyle}>
      <div>
        <img src={require("../assets/odlaw.jpg")} alt="odlaw" />
        Odlaw
      </div>
      <div>
        <img src={require("../assets/waldo.jpg")} alt="waldo" />
        Waldo
      </div>
      <div>
        <img src={require("../assets/wizard.jpg")} alt="wizard" />
        Wizard
      </div>
    </div>
  );
};

export default SelectionMenu;
