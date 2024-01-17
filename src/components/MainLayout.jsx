import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
const { Content } = Layout;

function MainLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <Navbar
          collapsed={collapsed}
          onClick={() => setCollapsed(!collapsed)}
        />
        <Content
          style={{
            margin: '16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
export default MainLayout;
