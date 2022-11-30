import React from 'react';
import './performanceChart.scss';
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

function PerformanceChart(props) {
  return (
    <>
      <h2 className="performance-chart-title">{props.title}</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          margin={{
            top: 15,
            right: 15,
            bottom: 15,
            left: 15,
          }}
          width={'100%'}
          height={'100%'}
          data={props.data}
          startAngle="-150"
          endAngle="210"
        >
          <PolarGrid />
          <PolarAngleAxis
            tickLine={false}
            dataKey="activity"
            stroke="#ffffff"
            strokeWidth="1"
          />
          <PolarRadiusAxis
            angle={30}
            domain={props.settings.performanceDomain}
            fillOpacity={0}
            strokeOpacity={0}
            tickCount={6}
          />
          <Radar
            name="PERFORMANCE"
            dataKey="score"
            stroke="#FF0101"
            strokeWidth="0"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
}

export default PerformanceChart;
