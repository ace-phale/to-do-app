import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = (props) => {
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
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputText.length < 1) {
      alert("Enter your task before adding it!");
    } else {
      props.handleAddTask(inputText, isImportant);
      setIsImportant(false);
      setInputText("");
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Row className="px-2 mt-2 mb-2  flex">
        <Col className="mt-3 pr-sm-2">
          <Form.Control
            className="shadow"
            maxLength="60"
            value={inputText}
            onChange={handleInputText}
            size="lg"
            placeholder="enter new task here"></Form.Control>
        </Col>

        <Col sm="auto" className="mt-3 pl-sm-2">
          <InputGroup
            size="lg"
            className="shadow justify-content-md-end justify-content-center flex-fill">
            <InputGroup.Prepend className="flex-fill">
              <InputGroup.Text className="flex-fill">
                is it important?
              </InputGroup.Text>
            </InputGroup.Prepend>

            <InputGroup.Checkbox
              style={{ width: "20px", height: "20px" }}
              checked={isImportant}
              onChange={handleCheckbox}
            />
            <InputGroup.Append className="flex-fill">
              <Button
                type="submit"
                className="flex-fill"
                onClick={handleFormSubmit}>
                add task
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default Header;
