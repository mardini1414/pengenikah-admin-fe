import React, { useState } from 'react';
import MainLayout from '../components/MainLayout';
import { Col, DatePicker, Row } from 'antd';
import ColumnChart from '../components/ColumnChart';
import CardSummary from '../components/CardSummary';
import {
  SkinOutlined,
  PlayCircleOutlined,
  MailOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';
import { getInvitationPerMonth } from '../services/InvitationService';
import { getSummaries } from '../services/SummaryService';

function Dashboard() {
  const [year, setYear] = useState(new Date().getFullYear());

  const { totalPerMonth } = getInvitationPerMonth(year);
  const { totalInvitation, totalSong, totalTheme } = getSummaries();

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
                value={totalInvitation}
              />
            </Col>
            <Col span={8}>
              <CardSummary
                icon={<SkinOutlined />}
                colorIcon={'rgb(220, 132, 243)'}
                backgrounIcon={'rgba(220, 132, 243, 0.25)'}
                label={'Total Theme'}
                value={totalTheme}
              />
            </Col>
            <Col span={8}>
              <CardSummary
                icon={<PlayCircleOutlined />}
                colorIcon={'rgb(210, 69, 69)'}
                backgrounIcon={'rgba(210, 69, 69, 0.25)'}
                label={'Total Song'}
                value={totalSong}
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
          <DatePicker
            defaultValue={dayjs(new Date())}
            onChange={v => setYear(v.year())}
            picker="year"
          />
        </div>
        <Col span={24}>
          <ColumnChart data={totalPerMonth} />
        </Col>
      </Row>
    </MainLayout>
  );
}

export default Dashboard;
