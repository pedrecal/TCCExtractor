import React from 'react';
import {
  DatabaseOutlined,
  FileTextOutlined,
  SaveOutlined,
  FilePdfOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Menu
      className="no-print"
      theme="dark"
      mode="horizontal"
      // onClick={handleKey}
    >
      <Menu.Item key="submitFiles">
        <Link to="submitFiles">
          <FilePdfOutlined />
          Enviar arquivos
        </Link>
      </Menu.Item>
      <Menu.Item key="extractedInfo">
        <Link to="extractedInfo">
          <DatabaseOutlined />
          Informações Extraídas
        </Link>
      </Menu.Item>
      <Menu.Item key="extractionParam">
        <Link to="extractionParam">
          <FileTextOutlined />
          Parâmetros de Extração
        </Link>
      </Menu.Item>
      <Menu.Item key="registeredParams">
        <Link to="registeredParams">
          <SaveOutlined />
          Parâmetros Registrados
        </Link>
      </Menu.Item>
    </Menu>
  );
}
