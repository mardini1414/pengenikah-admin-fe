import { Column } from '@ant-design/charts';
import React from 'react';

function ColumnChart({ data }) {
  const config = {
    color: '#FFDD95',
    data,
    pattern: {
      lineWidth: 10,
    },
    xField: 'month',
    yField: 'total',
    maxBarWidth: 10,
    xAxis: {
      label: {
        autoRotate: true,
      },
    },
  };
  return <Column {...config} />;
}

export default ColumnChart;
