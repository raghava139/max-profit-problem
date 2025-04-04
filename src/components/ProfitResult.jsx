import React from "react";
import { Typography, List } from "antd";

const { Title, Text } = Typography;

const ProfitResult = ({ result }) => {
  if (!result || result.earnings <= 0) return null;

  return (
    <div style={{ marginTop: 20 }}>
      <Title level={3}>Earnings: ${result.earnings}</Title>
      <Title level={4}>Solutions:</Title>
      <List
        bordered
        dataSource={result.solutions}
        style={{ maxHeight: "200px", overflowY: "auto" }}
        renderItem={(sol, idx) => (
          <List.Item key={idx}>
            <Text strong>
              T: {sol.T} P: {sol.P} C: {sol.C}
            </Text>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ProfitResult;
