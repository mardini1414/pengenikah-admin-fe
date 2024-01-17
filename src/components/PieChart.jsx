import { Pie } from '@ant-design/charts';
import React from 'react';

function PieChart({ data }) {
  const config = {
    color: ['#3468C0', '#A1EEBD', '#D24545'],
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    legend: false,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
}

export default PieChart;
