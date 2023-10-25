import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col } from "antd";
import { operationsButtons } from "../../data/data";
import {
  setOperation,
  setValue1,
  setValue2,
  setCalculatingStart,
  setCurrentValue,
} from "../../store/slice";
import { calculate } from "../../utils/utils";

const OperationsButtons = () => {
  const dispatch = useDispatch();
  const currentValue = useSelector((state) => state.currentValue);
  const value1 = useSelector((state) => state.value1);
  const value2 = useSelector((state) => state.value2);
  const operation = useSelector((state) => state.operation);

  const getCurrentResult = () => {
    const result = calculate(value1, Number(currentValue), operation);
    dispatch(setValue2(Number(currentValue)));
    dispatch(setValue1(result));
    dispatch(setCurrentValue(result.toString()));
    dispatch(setCalculatingStart(true));
  };

  const changeOperation = (type) => {
    dispatch(setOperation(type));
    dispatch(setValue2(0));
    dispatch(setCalculatingStart(true));
  };

  const handleOperationsButton = (type) => {
    if (type === "equal") {
      if (!operation) {
        dispatch(setCurrentValue(currentValue));
        return;
      }
      if (!value2) {
        getCurrentResult();
      } else {
        const result = calculate(value1, value2, operation);
        dispatch(setValue1(result));
        dispatch(setCurrentValue(result.toString()));
        dispatch(setCalculatingStart(true));
      }
    } else {
      if (operation) {
        getCurrentResult();
        if (operation !== type) {
          changeOperation(type);
        }
      } else {
        changeOperation(type);

        dispatch(setValue1(Number(currentValue)));
      }
    }
  };

  return (
    <Col className="calculator__operations-buttons">
      {operationsButtons.map((btn) => {
        return (
          <Button
            key={btn.value}
            type="primary"
            size={"large"}
            shape="circle"
            onClick={() => handleOperationsButton(btn.value)}
          >
            {btn.label}
          </Button>
        );
      })}
    </Col>
  );
};

export default OperationsButtons;
