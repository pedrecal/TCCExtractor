import React from 'react';
import {
  ExperimentOutlined,
  FileTextOutlined,
  HistoryOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

export default function Header() {
  return (
    <Menu
      className="no-print"
      // theme="dark"
      mode="horizontal"
    >
      <Menu.Item key="reportForm">
        <FileTextOutlined />
        Gerar Laudo
      </Menu.Item>
      <Menu.Item key="history">
        <HistoryOutlined />
        Histórico
      </Menu.Item>
      <Menu.Item key="lab">
        <ExperimentOutlined />
        Laboratório
      </Menu.Item>
      <Menu.Item key="settings">
        <SettingOutlined />
        Configurações
      </Menu.Item>
    </Menu>
  );
}
