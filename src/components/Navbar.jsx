import React from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Button, theme, Avatar } from 'antd';
const { Header } = Layout;

function Navbar({ collapsed, onClick }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: '2rem',
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={onClick}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />

      <div>
        <Avatar size="small" icon={<UserOutlined />} />
        <span style={{ marginLeft: '0.5rem' }}>Admin</span>
      </div>
    </Header>
  );
}

export default Navbar;
