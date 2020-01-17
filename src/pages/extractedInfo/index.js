import React, { useState, useEffect } from 'react';
import { Table, Popconfirm, Button, Modal } from 'antd';

import ModalInfo from '../../components/ModalInfo';

import api from '../../services/api';

const ExtractedInfo = () => {
  const [extractedData, setextractedData] = useState([]);
  const [isVisible, setisVisible] = useState(false);
  const [data, setData] = useState([]);

  const getAllData = async () => {
    setextractedData(await api.get('/extraction/allExtracted'));
  };

  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
    const a = [];
    if (extractedData.data) {
      extractedData.data.forEach(elem => {
        const {title, keyWords, pages, author, advisor, createdAt, updatedAt, coadvisor, userID, fileID, _id, ...test} = elem;
        setData([...data, test]);
        console.log(elem.summary);
      })
      // console.log(a);
    }
  }, [extractedData])

  const handleRemove = async id => {
    const res = await api.delete(`/extraction/removeExtracted/${id}`);
    if (res.status === 200) {
      getAllData();
    }
  };

  const handleOk = e => {
    setisVisible(!isVisible);
  };

  const dataColumns = [
    {
      title: 'Título do Trabalho',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Palavras-chave',
      dataIndex: 'keyWords',
      key: 'keyWords',
    },
    {
      title: 'Autor',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Orientador',
      dataIndex: 'advisor',
      key: 'advisor',
    },
    {
      title: 'Coorientador',
      dataIndex: 'coadvisor',
      key: 'coadvisor',
    },
    {
      title: 'Remover',
      dataIndex: 'delete',
      // eslint-disable-next-line react/display-name
      render: (text, record) =>
        extractedData.data.length >= 1 ? (
          <div>
            <Popconfirm
              title="Tem certeza que deseja remover este registro?"
              onConfirm={() => handleRemove(record._id)}
            >
              <a>Remover</a>
            </Popconfirm>{' '}
            <Button
              onClick={() => {
                setisVisible(true);
              }}
            >
              Mais
            </Button>
          </div>
        ) : null,
    },
  ];

  // const modalColumns = [
  //   {

  //   }
  // ]

  return (
    <div>
      <Table
        columns={dataColumns}
        dataSource={extractedData.data}
        rowKey="title"
        expandedRowRender={record => (
          <div>
            <h3>Resumo</h3>
            <p style={{ margin: 0 }}>{record.abstract}</p>
          </div>
        )}
      />
      <Modal
        title="Basic Modal"
        visible={isVisible}
        onOk={handleOk}
        width="90%"
      >
        <div><pre style={{whiteSpace:'pre-wrap'}}>{JSON.stringify(data, null, 2) }</pre></div>
      </Modal>
    </div>
  );
};

export default ExtractedInfo;
