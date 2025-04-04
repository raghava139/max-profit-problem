import React, { useRef, useEffect } from "react";
import { InputNumber, Button, message } from "antd";

const ProfitInput = ({ timeUnits, setTimeUnits, onCalculate }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCalculate();
    }
  };

  const handleCalculate = () => {
    if (!timeUnits || timeUnits < 1) {
      message.error("Please enter a valid number of time units (minimum 1)");
      return;
    }
    onCalculate();
  };

  return (
    <>
      <InputNumber
        ref={inputRef}
        min={1}
        value={timeUnits}
        onChange={setTimeUnits}
        onKeyPress={handleKeyPress}
        style={{ width: "100%", marginBottom: 16 }}
        placeholder="Enter time units"
      />
      <Button type="primary" onClick={handleCalculate} block>
        Calculate
      </Button>
    </>
  );
};

export default ProfitInput;
