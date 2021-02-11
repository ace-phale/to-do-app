import React, { useState } from "react";

const NavBar = (props) => {
  //state to control input values
  const [inputText, setInputText] = useState("");
  const [isImportant, setIsImportant] = useState(false);

  //functions handling controlled components input
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };
  const handleCheckbox = (e) => {
    setIsImportant(!isImportant);
  };

  return (
    <div className="row p-5">
      <div className="col-lg-2"></div>
      <div className="col-lg-7">
        <div className="input-group input-group-lg flex-nowrap m-2">
          <input
            type="text"
            className="form-control"
            placeholder="enter new task"
            maxLength="70"
            value={inputText}
            onChange={handleInputText}
          />
          <div className="input-group-prepend">
            <span className="input-group-text small">is it important?</span>
            <div className="input-group-text">
              <input
                type="checkbox"
                checked={isImportant}
                onChange={handleCheckbox}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3">
        <button
          onClick={() => {
            props.handleAddTask(inputText, isImportant);
            setIsImportant(false);
            setInputText("");
          }}
          className="btn btn-success m-2 btn-lg ">
          add task
        </button>
      </div>
    </div>
  );
};

export default NavBar;
