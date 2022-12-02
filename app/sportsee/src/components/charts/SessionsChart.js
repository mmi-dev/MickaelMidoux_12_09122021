import React from 'react';
import './sessionsChart.scss';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function SessionsChart(props) {
  return (
    <>
      <h2 className="sessions-chart-title">{props.title}</h2>
      <ResponsiveContainer width="99%" height="99%">
        <LineChart
          width={'100%'}
          height={'100%'}
          data={props.data}
          margin={{ top: 60, right: 10, bottom: 20, left: 10 }}
        >
          <Tooltip />
          <Line
            unit="min"
            type="monotone"
            dataKey="time"
            stroke="#ffffff"
            dot={false}
          />
          <XAxis dataKey="day" />
          <YAxis hide={true} domain={props.settings.sessionDomain} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default SessionsChart;
