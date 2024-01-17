import React from 'react';
import MainLayout from '../../components/MainLayout';
import { Button, Col, Input, Row, Table, DatePicker, Tag } from 'antd';
import { PlusOutlined, EyeOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { RangePicker } = DatePicker;
const dataSource = [
  {
    key: '1',
    name: 'Dwi dan Angel',
    theme: 'light',
    date: '10 Juni 2024',
    isActive: true,
    created: '12 Mei 2024',
  },
  {
    key: '2',
    name: 'Dwi dan Angel',
    theme: 'light',
    date: '10 Juni 2024',
    isActive: true,
    created: '12 Mei 2024',
  },
  {
    key: '3',
    name: 'Dwi dan Angel',
    theme: 'light',
    date: '10 Juni 2024',
    isActive: false,
    created: '12 Mei 2024',
  },
  {
    key: '4',
    name: 'Dwi dan Angel',
    theme: 'light',
    date: '10 Juni 2024',
    isActive: true,
    created: '12 Mei 2024',
  },
  {
    key: '5',
    name: 'Dwi dan Angel',
    theme: 'light',
    date: '10 Juni 2024',
    isActive: false,
    created: '12 Mei 2024',
  },
  {
    key: '6',
    name: 'Dwi dan Angel',
    theme: 'light',
    date: '10 Juni 2024',
    isActive: true,
    created: '12 Mei 2024',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Wedding Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Theme',
    dataIndex: 'theme',
    key: 'theme',
  },
  {
    title: 'Created',
    dataIndex: 'created',
    key: 'created',
  },
  {
    title: 'Status',
    dataIndex: 'isActive',
    key: 'isActive',
    render: data =>
      data ? (
        <Tag color="green">ACTIVE</Tag>
      ) : (
        <Tag color="red">NOT ACTIVE</Tag>
      ),
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
              <Input placeholder="search" />
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
              Add
            </Button>
          </Row>
        </Col>
      </Row>
      <Table dataSource={dataSource} columns={columns} />;
    </MainLayout>
  );
}

export default Invitation;
