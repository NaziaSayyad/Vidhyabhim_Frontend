import { Card, Title, Group, SegmentedControl } from "@mantine/core";
import { useState } from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
const salesData = [
    { month: "January", sales: 30, forecast: 50 },
    { month: "February", sales: 45, forecast: 55 },
    { month: "March", sales: 40, forecast: 60 },
    { month: "April", sales: 20, forecast: 65 },
    { month: "May", sales: 80, forecast: 70 },
    { month: "June", sales: 50, forecast: 50 },
    { month: "July", sales: 90, forecast: 40 },
  ];
  
  function SalesChart() {
    const [chartType, setChartType] = useState("area");
  
    return (
      <Card className="dashboard-card" __size="500px">
        <Group position="apart" mb="md">
          <Title order={4} className="card-title">
            <span role="img" aria-label="Sales">📉</span> Sales
          </Title>
          <SegmentedControl
            size="sm"
            data={[
              { label: "Area", value: "area" },
              { label: "Donut", value: "donut" },
            ]}
            value={chartType}
            onChange={setChartType}
          />
        </Group>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={salesData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="sales" stroke="#4682B4" fill="#4682B4" />
            <Area type="monotone" dataKey="forecast" stroke="#C0C0C0" fill="#C0C0C0" />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
    );
  }
  export default SalesChart