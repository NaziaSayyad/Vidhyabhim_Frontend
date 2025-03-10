import { useState, useEffect } from "react";
import { Card, Container, Title } from "@mantine/core";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Initial sample data
const initialData = [
  { time: "00:00", value: 200 },
  { time: "00:10", value: 250 },
  { time: "00:20", value: 230 },
  { time: "00:30", value: 300 },
  { time: "00:40", value: 280 },
];

function RealTimeChart() {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date().toLocaleTimeString().slice(3, 8); // Get HH:MM format

      const newValue = Math.floor(Math.random() * (500 - 100 + 1)) + 100; // Random value between 100-500

      setData((prevData) => {
        const updatedData = [...prevData, { time: newTime, value: newValue }];
        return updatedData.length > 10 ? updatedData.slice(1) : updatedData; // Keep only last 10 data points
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Container size="lg">
      <Title align="center" order={2} mt="md">
        Real-Time Data Chart
      </Title>

      <Card shadow="sm" p="lg" mt="xl">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#1d4ed8" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </Container>
  );
}

export default RealTimeChart;
