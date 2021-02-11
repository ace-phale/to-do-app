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
      <div className="col-2"></div>
      <div className="col-7">
        <div className="input-group input-group-lg">
          <input
            type="text"
            className="form-control"
            placeholder="enter new task"
            value={inputText}
            onChange={handleInputText}
          />
          <div className="input-group-prepend">
            <span className="input-group-text">is it important?</span>
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

      <div className="col-3  ">
        <button
          onClick={() => {
            props.handleAddTask(inputText, isImportant);
            setIsImportant(false);
            setInputText("");
          }}
          className="btn btn-success btn-lg ">
          add task
        </button>
      </div>
    </div>
  );
};

export default NavBar;
