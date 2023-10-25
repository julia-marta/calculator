import React from "react";
import { ConfigProvider } from "antd";
import Calculator from "../Calculator/Calculator";

const App = () => (
  <ConfigProvider
    theme={{
      token: { colorPrimary: "#F4801A" },
    }}
  >
    <Calculator />
  </ConfigProvider>
);

export default App;
