import React from 'react';

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './styles.css';

const NormalLoginForm = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="container">
      <Form name="normal_login" className="login-form" onSubmit={onFinish}>
        <Form.Item
          name="emai"
          rules={[
            { required: true, message: 'Você necessita fornecer um Email!' },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Senha obrigatória!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Senha"
          />
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="google.com">
            Esqueci minha senha
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NormalLoginForm;
