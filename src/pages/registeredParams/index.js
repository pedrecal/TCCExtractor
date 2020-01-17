import React, { useState, useEffect } from 'react';
import { Table, Popconfirm, Button, Modal, Tag } from 'antd';

import {B64ArrayDecode, B64StringToRegex} from '../../services/crypt';
import api from '../../services/api';

const coordinates = coords => (
  <div>
    <div>X: {coords.x}</div>
    <div>Y: {coords.y}</div>
  </div>
)

const RegisteredParams = () => {
  const [extractedData, setextractedData] = useState([]);
  const [data, setData] = useState({});

  const getAllData = async () => {
    setextractedData(await api.get('/extraction/registeredParams'));
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleRemove = async id => {
    const res = await api.delete(`/extraction/registeredParam/${id}`);
    if (res.status === 200) {
      getAllData();
    }
  };

  const dataColumns = [
    {
      title: 'Título',
      dataIndex: 'extractionTitle',
      key: 'extractionTitle',
    },
    {
      title: 'Palavras-chave Para Identificação da Página',
      dataIndex: 'keyWords',
      key: 'keyWords',
      render: keyWords => (
        <span>
          {keyWords.map(tag => {
            let color = 'blue'
            return (
              <Tag color={color} key={tag}>
                {B64StringToRegex(tag).toString()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Coordenadas Iniciais',
      dataIndex: 'coordinatesStart',
      key: 'coordinatesStart',
      render: coordinates
    },
    {
      title: 'Coordenadas Finais',
      dataIndex: 'coordinatesEnd',
      key: 'coordinatesEnd',
      render: coordinates
    },
    {
      title: 'Página(s)',
      dataIndex: 'pages',
      key: 'pages',
      // render: pages => pages.map((page, index)=> (index === 1) ? <div>{page}</div> : <div>{page}</div>)
    render: pages => <div>[{pages.join(' - ')}]</div>
    },
    {
      title: 'RegEx',
      dataIndex: 'regex',
      key: 'regex',
    render: regex => {
      if (regex && regex.length >= 1) {
       return (<Tag color={'blue'}>{B64StringToRegex(regex).toString()}</Tag>)
      }
    }
    },
    {
      title: 'Remover',
      dataIndex: 'delete',
      // eslint-disable-next-line react/display-name
      render: (text, record) =>
        extractedData.data.length >= 1 ? (
          <div>
            <Popconfirm
              title="Tem certeza que deseja remover este parâmetro?"
              onConfirm={() => handleRemove(record._id)}
            >
              <a>Remover</a>
            </Popconfirm>
          </div>
        ) : null,
    },
  ];

  return (
    <div>
      {console.log(extractedData.data)}
      <Table
        columns={dataColumns}
        dataSource={extractedData.data}
        rowKey="extractionTitle"
      />
    </div>
  );
};

export default RegisteredParams;
