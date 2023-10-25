import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col } from "antd";
import { numbersButtons, functionButtons } from "../../data/data";
import {
  editCurrentValue,
  setCurrentValue,
  eraseValue,
  cleanValue,
} from "../../store/slice";

const MainButtons = () => {
  const dispatch = useDispatch();
  const currentValue = useSelector((state) => state.currentValue);

  const handleNumberButton = (evt) => {
    const value = evt.target.textContent;
    dispatch(editCurrentValue(value));
  };

  const handleFunctionButton = (type) => {
    switch (type) {
      case "clean":
        dispatch(cleanValue());
        break;
      case "erase":
        dispatch(eraseValue());
        break;
      case "sign":
        let newValue;
        if (Number(currentValue)) {
          newValue = Number(currentValue) * -1;
          dispatch(setCurrentValue(newValue.toString()));
        }
        break;
      default:
        break;
    }
  };

  return (
    <Col className="calculator__main-buttons">
      {functionButtons.map((btn) => {
        return (
          <Button
            key={btn.value}
            type="primary"
            ghost
            size={"large"}
            className={btn.className ? btn.className : ""}
            onClick={() => handleFunctionButton(btn.value)}
          >
            {btn.label}
          </Button>
        );
      })}
      {numbersButtons.map((btn) => {
        return (
          <Button
            key={btn.value}
            type="default"
            size={"large"}
            className={btn.className ? btn.className : ""}
            onClick={handleNumberButton}
          >
            {btn.label}
          </Button>
        );
      })}
    </Col>
  );
};

export default MainButtons;
