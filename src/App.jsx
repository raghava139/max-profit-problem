import React, { useState } from "react";
import { Card, Typography } from "antd";
import ProfitInput from "./components/ProfitInput";
import ProfitResult from "./components/ProfitResult";
import { maxProfit } from "./utils/profitCalculator";

const { Title, Text } = Typography;

const App = () => {
  const [timeUnits, setTimeUnits] = useState(7);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const profit = maxProfit(timeUnits);
    setResult(profit);
  };

  return (
    <Card
      style={{
        maxWidth: 500,
        margin: "20px auto",
        textAlign: "center",
        padding: 20,
        border:'2px solid grey'
      }}
    >
      <div style={{ textAlign: "left" }}>
        <Title level={2}>Max Profit Calculator</Title>
        <Text strong>T: Theaters ($1500, 5 units)</Text>
        <br />
        <Text strong>P: Pubs ($1000, 4 units)</Text>
        <br />
        <Text strong>C: Commercial Park ($3000, 10 units)</Text>
      </div>

      <br />
      <ProfitInput
        timeUnits={timeUnits}
        setTimeUnits={setTimeUnits}
        onCalculate={calculate}
      />
      <ProfitResult result={result} />
    </Card>
  );
};

export default App;
