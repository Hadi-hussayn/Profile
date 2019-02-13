import React, { Component } from "react";
import AppWrapper from "./appcss";
import logo from "./logo.svg";
import { Layout } from "antd";
import DefaultHeader from "./containers/Header/index";

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <DefaultHeader />
        <Content />
      </Layout>
    );
  }
}

export default App;
