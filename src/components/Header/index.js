import React from 'react';
import { Menu, Icon } from 'antd';

export default function Header() {
  return (
    <Menu
      className="no-print"
      // theme="dark"
      mode="horizontal"
    >
      <Menu.Item key="reportForm">
        <Icon type="file-text" />
        Gerar Laudo
      </Menu.Item>
      <Menu.Item key="history">
        <Icon type="history" />
        Histórico
      </Menu.Item>
      <Menu.Item key="lab">
        <Icon type="experiment" />
        Laboratório
      </Menu.Item>
      <Menu.Item key="settings">
        <Icon type="setting" />
        Configurações
      </Menu.Item>
    </Menu>
  );
}
