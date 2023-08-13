import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";

const items = [
  {
    label: "Conta MJBank",
    key: "1",
  },
  {
    label: "Cartão de Crédito",
    key: "2",
  },
  {
    label: "investimentos",
    key: "3",
  },
];

const style = {
  width: "250px",
  height: "60px",
  textAlign: "center",
  color: "black",
  fontFamily: "Inter, sans-serif",
  fontWeight: "600",
};

export const DropDown = () => (
  <Dropdown
    menu={{
      items
    }}
  >
    <a style={style} onClick={(e) => e.preventDefault()}>
      <Space>
        Para você
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
