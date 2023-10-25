import React from "react";
import { useSelector } from "react-redux";
import { Card, Row } from "antd";
import MainButtons from "../MainButtons/MainButtons";
import OperationsButtons from "../OperationsButtons/OperationsButtons";

const headStyle = {
  backgroundColor: "#2b2a31",
  color: "#ffffff",
  textAlign: "right",
  fontSize: "32px",
};

const Calculator = () => {
  const currentValue = useSelector((state) => state.currentValue);

  return (
    <div className="calculator">
      <Card title={currentValue} headStyle={headStyle}>
        <Row className="calculator__buttons">
          <MainButtons />
          <OperationsButtons />
        </Row>
      </Card>
    </div>
  );
};

export default Calculator;
