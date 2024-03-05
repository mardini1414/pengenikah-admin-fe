import React, { useState } from 'react';
import { Button, Form, Input, Layout, message } from 'antd';

function Login() {
  const [pending, setPending] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async values => {
    // try {
    //   setPending(true);
    //   const { data } = await usePost('/auth/login', values);
    //   localStorage.setItem('token', data.token);
    //   window.open('/dashboard', '_self');
    // } catch (error) {
    //   if (error.response.status === 401) {
    //     messageApi.error('username or password is wrong');
    //   } else {
    //     messageApi.error('something when wrong');
    //   }
    // } finally {
    //   setPending(false);
    // }
  };

  return (
    <>
      {contextHolder}
      <Layout
        style={{ display: 'grid', placeContent: 'center', minHeight: '100dvh' }}
      >
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 10,
            padding: '1rem',
            minWidth: 300,
          }}
        >
          <h1 style={{ margin: '1rem 0', textAlign: 'center' }}>Login</h1>
          <Form
            layout="vertical"
            name="basic"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              required={false}
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              required={false}
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button block type="primary" htmlType="submit" disabled={pending}>
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Layout>
    </>
  );
}

export default Login;
