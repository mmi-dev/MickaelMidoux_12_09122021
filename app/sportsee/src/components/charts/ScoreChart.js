import React from 'react';
import './scoreChart.scss';
import { PieChart, Pie, Label, Cell, ResponsiveContainer } from 'recharts';

function ScoreChart(props) {
  return (
    <>
      <h2 className="score-chart-title">{props.title}</h2>
      <ResponsiveContainer width="99%" height="99%">
        <PieChart width="100%" height="100%">
          <Pie data={props.data} dataKey="value" outerRadius="80%" >
            <Cell fill="#FFFFFF" />
          </Pie>
          <Pie
            data={props.data}
            startAngle={props.settings.startAngle}
            endAngle={props.settings.endAngle}
            innerRadius="80%" //{80}
            outerRadius="90%" //{90}
            cornerRadius="50%" //{15}
            paddingAngle={0}
            dataKey="value"
          >
            <Cell fill="#FF0000" />
            <Label
              fill="#282D30"
              dy={-15}
              className="score-pourcentage"
              position="centerBottom"
            >
              {Math.floor(props.data[0].value * 100) + '%'}
            </Label>
            <Label
              fill="#74798C"
              className="score-comment"
              position="centerTop"
            >
              de votre
            </Label>
            <Label
              fill="#74798C"
              dy={25}
              className="score-comment"
              position="centerTop"
            >
              objectif
            </Label>
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

export default ScoreChart;
