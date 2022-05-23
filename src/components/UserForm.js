import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/userForm.css";

const UserForm = ({
  shouldDisplay,
  time,
  submitScore,
  handleInput,
  userName,
  showErrorMessage = false,
}) => {
  const positionStyle = {};
  if (!shouldDisplay) positionStyle["display"] = "none";


  return (
    <div
      className="overlay"
      onClick={(e) => {
        e.stopPropagation();
      }}
      style={positionStyle}
    >
      <div className="user-form">
        <h3>You finished in {time} seconds!</h3>
        <form>
          <div className="input-section">
            <p>Enter your name to save your score on the global leaderboard.</p>
            <label htmlFor="username">Username</label>
            <input
              name="username"
              value={userName}
              onInput={handleInput}
              className={showErrorMessage ? "error" : ""}
            />
            <span
              className={"error-message" + (showErrorMessage ? "" : " hide")}
            >
              Use another username
            </span>
          </div>
          <div className="button-section">
            <Link to="/">
              <button type="button" className="cancel">
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="submit"
              onClick={(e) => {
                submitScore(e);
              }}
            >
              Submit Score
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
