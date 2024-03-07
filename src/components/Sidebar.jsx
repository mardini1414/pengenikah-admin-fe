import React from 'react';
import { Layout, Menu } from 'antd';
import {
  PieChartOutlined,
  MailOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { logout } from '../services/AuthService';

const { Sider } = Layout;

function Sidebar({ collapsed }) {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const items = [
    {
      key: '1',
      icon: <PieChartOutlined />,
      label: 'Dashboard',
      path: '/dashboard',
      onClick: () => navigate('/dashboard'),
    },
    {
      key: '2',
      icon: <MailOutlined />,
      label: 'Invitation',
      path: '/invitation',
      onClick: () => navigate('/invitation'),
    },
    {
      key: '3',
      danger: true,
      icon: <LogoutOutlined />,
      label: 'Logout',
      onClick: () => logout(),
    },
  ];

  function selectedKey() {
    const item = items.find(v => path.toLowerCase().startsWith(v.path));
    return item.key;
  }

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme="light"
      style={{ minHeight: '100dvh' }}
    >
      <div className="logo">LOGO</div>
      <Menu
        style={{ marginTop: '1rem' }}
        mode="inline"
        selectedKeys={[selectedKey()]}
        items={items}
      />
    </Sider>
  );
}

export default Sidebar;
