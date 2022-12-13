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

/**
 * @component
 * @description Radar chart to visualize user performance
 * @param {Object} props
 * @param {string} props.title title of the graph
 * @param {object[]} props.data {}data value for the recharts graph component
 * @param {string} props.data[].activity activity name
 * @param {number} props.data[].score activity score
 * @param {Object} props.settings {}settings for the recharts graph component
 * @param {number[]} props.settings.performanceDomain Y axis domain for performance value [min, max]
 * @example
  <PerformanceChart
    title={'Ex Performances'}
    settings={{
      performanceDomain: [0, 250],
    }}
    data={
      {activity: "Cardio", score: 80}
      {activity: "Energie", score: 120}
      {activity: "Endurance", score: 140}
      {activity: "Force", score: 50}
      {activity: "Vitesse", score: 200}
      {activity: "Intensité", score: 90}
    }
  />
 */
function PerformanceChart(props) {
  return (
    <>
      <h2 className="performance-chart-title">{props.title}</h2>
      <ResponsiveContainer width="99%" height="99%">
        <RadarChart
          margin={{
            top: 15,
            right: 30,
            bottom: 15,
            left: 30,
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
