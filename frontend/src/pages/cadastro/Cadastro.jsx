import React from "react";
import { Layout, Col, Row } from "antd";
const { Header, Footer, Content } = Layout;

export const Cadastro = (props) => {
  return (
    <Layout style={{ display: "flex", alignItems: "center" }}>
      <Header style={{ minWidth: "100vw" }} />
      <Content style={{ display: 'grid', placeItems: 'center', minHeight: "80vh", width: "60%", border: "1px solid" }}>
        <Row style={{ width: '100%'}}>
          <Col style={{display: 'grid', placeItems: 'center'}} span={24}>{props.children}</Col>
        </Row>
      </Content>
      <Footer style={{ minWidth: "100vw" }}>hello</Footer>
    </Layout>
  );
};
