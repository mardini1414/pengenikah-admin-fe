import React, { useState } from 'react';
import MainLayout from '../../components/MainLayout';
import { Button, Col, Input, Row, Table, DatePicker, Tag } from 'antd';
import { PlusOutlined, EyeOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { getInvitations } from '../../services/InvitationService';
import { debounce } from '../../utils/debounce';

const { RangePicker } = DatePicker;
const columns = [
  {
    title: 'Bride',
    dataIndex: 'bride',
    key: 'brideName',
  },
  {
    title: 'Groom',
    dataIndex: 'groom',
    key: 'groomName',
  },
  {
    title: 'Theme',
    dataIndex: 'theme',
    key: 'theme',
  },
  {
    title: 'Song',
    dataIndex: 'song',
    key: 'song',
  },
  {
    title: 'Ceremony',
    dataIndex: 'ceremony',
    key: 'ceremony',
  },
  {
    title: 'Reception',
    dataIndex: 'reception',
    key: 'reception',
  },
  {
    title: 'Created',
    dataIndex: 'created',
    key: 'created',
  },

  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: () => (
      <div style={{ display: 'flex', gap: 10 }}>
        <Button icon={<EyeOutlined />}></Button>
        <Button icon={<EditOutlined />}></Button>
      </div>
    ),
  },
];

function Invitation() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate();
  const { invitations, total, isLoading } = getInvitations({
    page,
    name,
    startDate,
    endDate,
  });

  const debouncedName = debounce(e => {
    setName(e.target.value);
  }, 400);

  function searchName(e) {
    debouncedName(e);
  }

  function dateRange(e) {
    setStartDate(e[0].format('YYYY-MM-D'));
    setEndDate(e[1].format('YYYY-MM-D'));
  }

  return (
    <MainLayout>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={12}>
          <Row gutter={10}>
            <Col span={12}>
              <Input placeholder="search name" onChange={searchName} />
            </Col>
            <Col span={12}>
              <RangePicker onChange={dateRange} />
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row justify={'end'}>
            <Button
              icon={<PlusOutlined />}
              type="primary"
              onClick={() => navigate('/invitation/create')}
            >
              Create
            </Button>
          </Row>
        </Col>
      </Row>
      <Table
        scroll={{ x: 1536 }}
        dataSource={invitations}
        columns={columns}
        loading={isLoading}
        pagination={{ total, onChange: num => setPage(num) }}
      />
      ;
    </MainLayout>
  );
}

export default Invitation;
