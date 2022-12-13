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
      title={'Durée moyanne des sessions'}
      settings={{
        sessionDomain: [
          sessionsChartSessionDomainMin,
          sessionsChartSessionDomainMax,
        ],
      }}
      data={sessionsChartData}
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
