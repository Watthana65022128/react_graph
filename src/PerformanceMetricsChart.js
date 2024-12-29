import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { epoch: 10, precision: 0.985342, recall: 0.985334, f1_score: 0.985318, support: 16027 },
  { epoch: 20, precision: 0.98139, recall: 0.98158, f1_score: 0.981456, support: 16027 },
  { epoch: 30, precision: 0.989872, recall: 0.989905, f1_score: 0.98987, support: 16027 },
  { epoch: 40, precision: 0.982669, recall: 0.982569, f1_score: 0.982604, support: 16027 },
  { epoch: 50, precision: 0.986247, recall: 0.986187, f1_score: 0.986195, support: 16027 },
  { epoch: 60, precision: 0.98826, recall: 0.988881, f1_score: 0.988794, support: 16027 },
  { epoch: 70, precision: 0.988132, recall: 0.988073, f1_score: 0.988097, support: 16027 },
  { epoch: 80, precision: 0.990535, recall: 0.990631, f1_score: 0.990563, support: 16027 },
  { epoch: 90, precision: 0.983296, recall: 0.983455, f1_score: 0.983341, support: 16027 },
  { epoch: 100, precision: 0.987915, recall: 0.987921, f1_score: 0.98790, support: 16027 },
  { epoch: 110, precision: 0.986071, recall: 0.986221, f1_score: 0.986118, support: 16027 }
];

const PerformanceMetricsChart = () => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded shadow-lg border border-gray-200">
          <p className="font-bold">Epoch {label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {Number(entry.value).toFixed(4)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-50">
      <div className="w-4/5 bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-center items-center mb-8">
          <h2 className="text-xl font-bold text-gray-800">Model Performance Characters</h2>
        </div>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 20,
                right: 100,
                left: 30,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="epoch"
                label={{ value: 'Epoch', position: 'insideBottom', offset: -10 }}
                tick={{ fill: '#666', fontSize: 10 }}
              />
              <YAxis
                domain={[0.97, 1.0]}
                label={{ value: 'Macro Average', angle: -90, position: 'insideLeft', offset: -10 }}
                tick={{ fill: '#666', fontSize: 10 }}
                tickFormatter={(value) => value.toFixed(4)}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                layout="vertical"
                align="right"
                verticalAlign="middle"
                wrapperStyle={{ paddingLeft: "20px", fontSize: "14px" }}
              />
              <Line
                type="natural"
                dataKey="precision"
                stroke="#4f46e5"
                name="Precision"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="natural"
                dataKey="recall"
                stroke="#10b981"
                name="Recall"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="natural"
                dataKey="f1_score"
                stroke="#f59e0b"
                name="F1-Score"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetricsChart;