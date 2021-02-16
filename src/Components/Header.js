import React, { useState } from "react";
import NavBar from "react-bootstrap/NavBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
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

  return (
    <Row className="px-2 mt-2 mb-2  flex">
      <Col className="mt-3">
        <Form>
          <Form.Control
            value={inputText}
            onChange={handleInputText}
            size="lg"
            placeholder="enter new task here"></Form.Control>
        </Form>
      </Col>

      <Col sm="auto" className="mt-3">
        <Form>
          <InputGroup
            size="lg"
            className="justify-content-md-end justify-content-center flex-fill">
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
                className="flex-fill"
                onClick={() => {
                  props.handleAddTask(inputText, isImportant);
                  setIsImportant(false);
                  setInputText("");
                }}>
                add task
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Col>
    </Row>
  );
};

export default Header;
