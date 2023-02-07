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

/**
 * @component
 * @description Line chart to visualize user sessions
 * @param {Object} props
 * @param {string} props.title title of the graph
 * @param {Array} props.data {}data value for the recharts graph component
 * @param {Object} props.settings {}settings for the recharts graph component
 * @param {number[]} props.settings.sessionDomain Y axis domain for session value [min, max]
 * @example
 * <SessionsChart
      title="Ex Durée moyanne des sessions"
      settings={{
        sessionDomain: [18, 55],
      }}
      data={
        {day: "L", time: 30}
        {day: "M", time: 40}
        {day: "M", time: 50}
        {day: "J", time: 30}
        {day: "V", time: 30}
        {day: "S", time: 50}
        {day: "D", time: 50}
      }
    />
 */
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
            stroke="#fff4ff"
            strokeWidth={3}
            dot={false}
            activeDot={{
              r: 4,
              fill: '#fff4ff',
              stroke: 'rgba(255,255,255,0.4)',
              strokeWidth: 10,
            }}
          />
          <XAxis dataKey="day" />
          <YAxis hide={true} domain={props.settings.sessionDomain} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default SessionsChart;
