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

function ActivityChart(props) {
  return (
    <>
      <h2 className="activity-chart-title">{props.title}</h2>
      <ResponsiveContainer width="100%" height="100%">
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
