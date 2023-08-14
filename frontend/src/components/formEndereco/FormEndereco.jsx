import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { adicCliente } from "../../api/Api";

export const FormClienteEndereco = () => {
  const onFinish = (values) => {
    adicCliente(values);
    console.log("Form values:", values);
  };

  return (
    <Form
      name="form_cliente"
      layout="vertical"
      onFinish={onFinish}
      style={{ width: "35rem"}}
    >
      <Row gutter={[16, 16]}>
        <Col span={18}>
          <Form.Item
            label="Rua"
            name="rua"
            rules={[{ required: true, message: "Por favor, insira a rua" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="Número"
            name="numeroCasa"
            rules={[
              { required: true, message: "Por favor, insira o numero da casa" },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={14}>
          <Form.Item
            label="Complemento"
            name="complemento"
            rules={[
              { required: true, message: "Por favor, insira a complemento" },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item
            label="Bairro"
            name="bairro"
            rules={[{ required: true, message: "Por favor, insira o bairro" }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            label="Cidade"
            name="cidade"
            rules={[{ required: true, message: "Por favor, insira o cidade" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Estado"
            name="estado"
            rules={[{ required: true, message: "Por favor, insira o estado" }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
          <Col span={12}>
              <Form.Item
                label="País"
                name="pais"
                rules={[{ required: true, message: "Por favor, insira o país" }]}
              >
                <Input />
              </Form.Item>
          </Col>
          <Col span={12}>
              <Form.Item
                label="Cep"
                name="cep"
                rules={[{ required: true, message: "Por favor, insira o cep" }]}
              >
                <Input />
              </Form.Item>
          </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit" size="large">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};
