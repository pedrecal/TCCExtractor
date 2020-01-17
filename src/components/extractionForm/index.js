import React, { useEffect, useState } from 'react';

import {
  Form,
  Input,
  InputNumber,
  Button,
  Typography,
  // Select,
  Switch,
} from 'antd';
import { useForm } from 'react-hook-form';

import './styles.less';

const { Title } = Typography;

const ExtractionForm = () => {
  const [searchForm, setSearchForm] = useState(false);
  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    register({ name: 'extractionTitle' }, { required: true });
    register({ name: 'page' }, { required: true });
    register({ name: 'coordinatesStartX' }, { required: true });
    register({ name: 'coordinatesStartY' }, { required: true });
    register({ name: 'coordinatesEndX' }, { required: true });
    register({ name: 'coordinatesEndY' }, { required: true });
    register({ name: 'regex' });
    register({ name: 'keyWords' });
  }, [register]);

  const handleFormSubmit = values => {
    console.log(values);
  };

  const handleSwitch = bool => {
    setSearchForm(bool);
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)} className="form">
      <Title level={4}>Tipo de Formulário (Mudar nome)</Title>
      <Switch defaultChecked onChange={handleSwitch} checked={searchForm} />
      <Form.Item
        name="extractionTitle"
        label="Título da extração"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input onChange={e => setValue('extractionTitle', e.target.value)} />
      </Form.Item>
      <Form.Item
        name="page"
        label="Página"
        rules={[
          {
            type: 'number',
            required: true,
          },
        ]}
      >
        <InputNumber onChange={value => setValue('page', value)} />
      </Form.Item>
      <div className="flex">
        <div className="initCoord">
          <Title level={4}>Coordenadas Iniciais</Title>
          <div className="flex coords">
            <Form.Item
              name="coordinatesStartX"
              label="X"
              rules={[
                {
                  type: 'number',
                  required: true,
                },
              ]}
            >
              <InputNumber
                onChange={value => setValue('coordinatesStartX', value)}
              />
            </Form.Item>
            <Form.Item
              name="coordinatesStartY"
              label="Y"
              rules={[
                {
                  type: 'number',
                  required: true,
                },
              ]}
            >
              <InputNumber
                onChange={value => setValue('coordinatesStartY', value)}
              />
            </Form.Item>
          </div>
        </div>
        <div className="endCoord">
          <Title level={4}>Coordenadas Finais</Title>
          <div className="flex">
            <Form.Item
              name="coordinatesEndX"
              label="X"
              rules={[
                {
                  type: 'number',
                  required: true,
                },
              ]}
            >
              <InputNumber
                onChange={value => setValue('coordinatesEndX', value)}
              />
            </Form.Item>
            <Form.Item
              name="coordinatesEndY"
              label="Y"
              rules={[
                {
                  type: 'number',
                  required: true,
                },
              ]}
            >
              <InputNumber
                onChange={value => setValue('coordinatesEndY', value)}
              />
            </Form.Item>
          </div>
        </div>
      </div>
      <Form.Item name="regex" label="RegEx">
        <Input onChange={e => setValue('regex', e.target.value)} />
      </Form.Item>
      {searchForm ? (
        <Form.Item name="keyWords" label="Palavras Chave">
          <Input onChange={e => setValue('keyWords', e.target.value)} />
        </Form.Item>
      ) : null}
      {/* <Form.Item
        name="docType"
        label="Tipo do Documento"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select disabled value="TCC" />
      </Form.Item> */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ExtractionForm;
