import React from 'react';
import { Form, Input, Button } from 'antd';
import { adicCliente } from '../../api/Api';

export const FormCliente = () => {

  const onFinish = (values) => {
    adicCliente(values)
    console.log('Form values:', values);
  
  };

  return (
    <Form name="form_cliente" layout="vertical" onFinish={onFinish}>
      <Form.Item label="Nome" name="nome" rules={[{ required: true, message: 'Por favor, insira o nome' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Sobrenome" name="sobrenome" rules={[{ required: true, message: 'Por favor, insira o sobrenome' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Idade" name="idade" rules={[{ required: true, message: 'Por favor, insira a idade' }]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item label="CPF" name="cpf" rules={[{ required: true, message: 'Por favor, insira o CPF' }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};
