import React from 'react';
import MainLayout from '../../components/MainLayout';
import { Button, Col, Input, Row, Table, DatePicker, Tag } from 'antd';
import { PlusOutlined, EyeOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { RangePicker } = DatePicker;
const dataSource = [
  {
    key: '1',
    brideName: 'Angela',
    groomName: 'Munawier',
    theme: 'light',
    song: 'Agun - Ketika Cinta Harus Memilih',
    ceremony: '10 Juni 2024',
    reception: '10 Juni 2024',
    created: '12 Mei 2024',
  },
  {
    key: '2',
    brideName: 'Angela',
    groomName: 'Munawier',
    theme: 'light',
    song: 'Agun - Ketika Cinta Harus Memilih',
    ceremony: '10 Juni 2024',
    reception: '10 Juni 2024',
    created: '12 Mei 2024',
  },
  {
    key: '3',
    brideName: 'Angela',
    groomName: 'Munawier',
    theme: 'light',
    song: 'Agun - Ketika Cinta Harus Memilih',
    ceremony: '10 Juni 2024',
    reception: '10 Juni 2024',
    created: '12 Mei 2024',
  },
  {
    key: '4',
    brideName: 'Angela',
    groomName: 'Munawier',
    theme: 'light',
    song: 'Agun - Ketika Cinta Harus Memilih',
    ceremony: '10 Juni 2024',
    reception: '10 Juni 2024',
    created: '12 Mei 2024',
  },
  {
    key: '5',
    brideName: 'Angela',
    groomName: 'Munawier',
    theme: 'light',
    song: 'Agun - Ketika Cinta Harus Memilih',
    ceremony: '10 Juni 2024',
    reception: '10 Juni 2024',
    created: '12 Mei 2024',
  },
  {
    key: '6',
    brideName: 'Angela',
    groomName: 'Munawier',
    theme: 'light',
    song: 'Agun - Ketika Cinta Harus Memilih',
    ceremony: '10 Juni 2024',
    reception: '10 Juni 2024',
    created: '12 Mei 2024',
  },
  {
    key: '7',
    brideName: 'Angela',
    groomName: 'Munawier',
    theme: 'light',
    song: 'Agun - Ketika Cinta Harus Memilih',
    ceremony: '10 Juni 2024',
    reception: '10 Juni 2024',
    created: '12 Mei 2024',
  },
];

const columns = [
  {
    title: 'Bride',
    dataIndex: 'brideName',
    key: 'brideName',
  },
  {
    title: 'Groom',
    dataIndex: 'groomName',
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
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={12}>
          <Row gutter={10}>
            <Col span={12}>
              <Input placeholder="search name" />
            </Col>
            <Col span={12}>
              <RangePicker />
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
      <Table dataSource={dataSource} columns={columns} />;
    </MainLayout>
  );
}

export default Invitation;
