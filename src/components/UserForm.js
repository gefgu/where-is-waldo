import "../styles/userForm.css";

const UserForm = ({ shouldDisplay = true }) => {
  const positionStyle = {};

  if (!shouldDisplay) positionStyle["display"] = "none";
  return (
    <div
      className="overlay"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="user-form">
        <h3>You finished in 12.345 seconds!</h3>
        <form>
          <div className="input-section">
            <p>Enter your name to save your score on the global leaderboard.</p>
            <label htmlFor="username">Username</label>
            <input name="username" />
          </div>
          <div className="button-section">
            <button type="button" className="cancel">
              Cancel
            </button>
            <button type="submit" className="submit">
              Submit Score
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
