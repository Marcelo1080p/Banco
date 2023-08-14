import React from "react";
import "./App.css";
import { Layout, Menu, Space } from "antd";
const { Header, Content, Footer } = Layout;
import { BtnQueroSerMj } from "./components/btnQueroSerMj/btnQueroSerMj";
import { DropDown } from "./components/dropDown/DropDown";
import { Link } from "react-router-dom";

const App = () => {
  const tituloPrincipal = {
    position: "absolute",
    top: "50%",
    left: "5%",
    fontSize: "3rem",
    color: "white",
  };
  const tituloSecundario = {
    color: "#006d75",
    background: "#f0f5ff",
    borderRadius: "25px",
    padding: "5px 15px",
  };
  const styleMenu = {
    display: "flex",
    gap: "0 2rem",
    minWidth: "1000px",
    height: "60px",
    color: "black",
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    backgroundColor: "transparent",
  };

  return (
    <Layout
      className="layout"
      style={{
        minHeight: "100vh",
      }}
    >
      <Header
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          background: "#f0f5ff",
        }}
      >
        <Menu style={styleMenu}>
          <p>Página inicial</p>
          <DropDown />
        </Menu>
        <Link to="/cadastro/cliente">
          <BtnQueroSerMj />
        </Link>
      </Header>
      <Content
        style={{
          overflow: "hidden",
          width: "100%",
        }}
      >
        <img
          className="mainImg"
          style={{ maxWidth: "100%" }}
          src="../public/mulher-mexendo-celular.jpg"
          alt="mulher jovem mexendo no celular"
        />
        <section style={tituloPrincipal}>
          <h1>Faça parte do Futuro</h1>
          <h1 style={{ marginLeft: "33%" }}>
            com <strong style={tituloSecundario}>MJBank</strong>
          </h1>
        </section>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Mj Bank Companny
      </Footer>
    </Layout>
  );
};
export default App;
