import React, { useEffect } from 'react';

import { withRouter } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useForm } from 'react-hook-form';

import { UserOutlined, LockOutlined } from '@ant-design/icons';
import api from '../../services/api';

import './styles.css';

const Login = () => {
  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    register({ name: 'email' }, { required: true });
    register({ name: 'password' }, { required: true });
  }, [register]);

  const handleLoginSubmit = async data => {
    const response = await api.post('/user/login/', {
      email: data.email,
      password: data.password,
    });

    console.log(response);

    if (response.status === 200) {
      // history.push('/submitFile');
    }
  };

  return (
    <div className="container">
      <Form
        name="normal_login"
        className="login-form"
        onSubmit={handleSubmit(handleLoginSubmit)}
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Você necessita fornecer um Email!' },
          ]}
        >
          <Input
            name="email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            onChange={e => setValue('email', e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Senha obrigatória!' }]}
        >
          <Input
            name="password"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Senha"
            onChange={e => setValue('password', e.target.value)}
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

export default withRouter(Login);
