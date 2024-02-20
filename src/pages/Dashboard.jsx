import React from 'react';
import MainLayout from '../components/MainLayout';
import { Col, DatePicker, Row } from 'antd';
import ColumnChart from '../components/ColumnChart';
import CardSummary from '../components/CardSummary';
import {
  SkinOutlined,
  PlayCircleOutlined,
  MailOutlined,
} from '@ant-design/icons';

const columnData = [
  {
    month: 'January',
    total: 38,
  },
  {
    month: 'February',
    total: 52,
  },
  {
    month: 'March',
    total: 61,
  },
  {
    month: 'April',
    total: 1,
  },
  {
    month: 'Mei',
    total: 48,
  },
  {
    month: 'June',
    total: 34,
  },
  {
    month: 'July',
    total: 33,
  },
  {
    month: 'August',
    total: 38,
  },
  {
    month: 'September',
    total: 27,
  },
  {
    month: 'October',
    total: 38,
  },
  {
    month: 'November',
    total: 18,
  },
  {
    month: 'December',
    total: 48,
  },
];

function Dashboard() {
  return (
    <MainLayout>
      <Row gutter={20} style={{ marginBottom: '3rem' }}>
        <Col span={24}>
          <Row gutter={10}>
            <Col span={8}>
              <CardSummary
                icon={<MailOutlined />}
                colorIcon={'rgb(52, 104, 192)'}
                backgrounIcon={'rgba(52, 104, 192, 0.25)'}
                label={'Total Invitation'}
                value={'1.000.000'}
              />
            </Col>
            <Col span={8}>
              <CardSummary
                icon={<SkinOutlined />}
                colorIcon={'rgb(220, 132, 243)'}
                backgrounIcon={'rgba(220, 132, 243, 0.25)'}
                label={'Total Theme'}
                value={'1.000.000'}
              />
            </Col>
            <Col span={8}>
              <CardSummary
                icon={<PlayCircleOutlined />}
                colorIcon={'rgb(210, 69, 69)'}
                backgrounIcon={'rgba(210, 69, 69, 0.25)'}
                label={'Total Song'}
                value={'1.000.000'}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            marginBottom: '2rem',
          }}
        >
          <div>
            <h3 style={{ color: '#313131' }}>Total Invitation per month</h3>
          </div>
          <DatePicker picker="year" />
        </div>
        <Col span={24}>
          <ColumnChart data={columnData} />
        </Col>
      </Row>
    </MainLayout>
  );
}

export default Dashboard;
