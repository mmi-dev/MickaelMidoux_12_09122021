import React from 'react';
import './activityChart.scss';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
} from 'recharts';

/**
 * @component
 * @description Bar chart to visualize user daily activity
 * @param {Object} props
 * @param {string} props.title title of the graph
 * @param {Object} props.settings {}settings for the recharts graph component
 * @param {number[]} props.settings.weightDomain Y axis domain for weight value [min, max]
 * @param {number[]} props.settings.caloryDomain Y axis domain for calory value [min, max]
 * @param {object[]} props.data
 * @param {number} props.data[].Poids\u0020(kg) user calories burned
 * @param {number} props.data[].[Poids_kg] user weight
 * @param {number} props.data.date activity weekday number
 * @example
 * <ActivityChart
    title="Example Activité quotidienne"
    settings={{
      weightDomain: [75,82],
      caloryDomain: [95,430],
    }}
    data={
      {Calories brulées (kCal): 240, Poids (kg): 80, date:1}
      {Calories brulées (kCal): 220, Poids (kg): 80, date:2}
      {Calories brulées (kCal): 280, Poids (kg): 81, date:3}
      {Calories brulées (kCal): 290, Poids (kg): 81, date:4}
      {Calories brulées (kCal): 160, Poids (kg): 80, date:5}
      {Calories brulées (kCal): 162, Poids (kg): 78, date:6}
      {Calories brulées (kCal): 390, Poids (kg): 76, date:7}
    }
  />
*/
function ActivityChart(props) {
  return (
    <>
      <h2 className="activity-chart-title">{props.title}</h2>
      <ResponsiveContainer width="99%" height="99%">
        <BarChart
          width={'100%'}
          height={'100%'}
          data={props.data}
          margin={{ top: 50, left: 25, right: 30, bottom: 25 }}
        >
          <CartesianGrid vertical={false} strokeDasharray="2 2" />
          <XAxis dataKey="date" dy={10} />
          <YAxis
            tickCount={4}
            dx={10}
            yAxisId={0}
            orientation={'right'}
            domain={props.settings.weightDomain}
          >
            <Label dx={15} value="(kg)" position="insideRight" />
          </YAxis>
          <YAxis hide={true} yAxisId={1} domain={props.settings.caloryDomain} />
          <Tooltip />
          <Legend
            align={'right'}
            verticalAlign={'top'}
            iconType={'circle'}
            iconSize={8}
          />
          <Bar
            yAxisId={0}
            barSize={7}
            radius={[3, 3, 0, 0]}
            dataKey="Poids (kg)"
            fill="#282D30"
            unit="kg"
          />
          <Bar
            yAxisId={1}
            barSize={7}
            radius={[3, 3, 0, 0]}
            dataKey="Calories brulées (kCal)"
            fill="#E60000"
            unit="kCal"
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default ActivityChart;
