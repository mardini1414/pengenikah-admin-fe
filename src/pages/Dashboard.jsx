import React from 'react';
import MainLayout from '../components/MainLayout';
import { Col, DatePicker, Row } from 'antd';
import ColumnChart from '../components/ColumnChart';
import PieChart from '../components/PieChart';
import CardSummary from '../components/CardSummary';
import {
  SkinOutlined,
  CheckCircleOutlined,
  IssuesCloseOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { RangePicker } = DatePicker;

const pieData = [
  {
    type: 'Total',
    value: 27,
  },
  {
    type: 'Active',
    value: 25,
  },
  {
    type: 'Not Active',
    value: 18,
  },
];

const columnData = [
  {
    month: 'January',
    value: 38,
  },
  {
    month: 'February',
    value: 52,
  },
  {
    month: 'March',
    value: 61,
  },
  {
    month: 'April',
    value: 145,
  },
  {
    month: 'Mei',
    value: 48,
  },
  {
    month: 'June',
    value: 34,
  },
  {
    month: 'July',
    value: 33,
  },
  {
    month: 'August',
    value: 38,
  },
  {
    month: 'September',
    value: 27,
  },
  {
    month: 'October',
    value: 38,
  },
  {
    month: 'November',
    value: 18,
  },
  {
    month: 'December',
    value: 48,
  },
];

function Dashboard() {
  return (
    <MainLayout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '2rem',
        }}
      >
        <h3 style={{ color: '#313131' }}>Summary data</h3>
        <RangePicker picker="year" />
      </div>
      <Row gutter={20} style={{ marginBottom: '3rem' }}>
        <Col span={12}>
          <PieChart data={pieData} />
        </Col>
        <Col span={12}>
          <Row gutter={[10, 10]}>
            <Col span={24}>
              <CardSummary
                icon={<MailOutlined />}
                colorIcon={'rgb(52, 104, 192)'}
                backgrounIcon={'rgba(52, 104, 192, 0.25)'}
                label={'Total Invitation'}
                value={'1.000.000'}
              />
            </Col>
            <Col span={24}>
              <CardSummary
                icon={<CheckCircleOutlined />}
                colorIcon={'rgb(161, 238, 189)'}
                backgrounIcon={'rgba(161, 238, 189, 0.25)'}
                label={'Invitation Active'}
                value={'1.000.000'}
              />
            </Col>
            <Col span={24}>
              <CardSummary
                icon={<IssuesCloseOutlined />}
                colorIcon={'rgb(210, 69, 69)'}
                backgrounIcon={'rgba(210, 69, 69, 0.25)'}
                label={'Invitation Not Active'}
                value={'1.000.000'}
              />
            </Col>
            <Col span={24}>
              <CardSummary
                icon={<SkinOutlined />}
                colorIcon={'rgb(220, 132, 243)'}
                backgrounIcon={'rgba(220, 132, 243, 0.25)'}
                label={'Total Theme'}
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
