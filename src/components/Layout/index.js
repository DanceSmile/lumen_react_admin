import React from "react"

import "./index.css"

import { Layout, Menu, Icon } from 'antd';

import Menus from "../Menu"
import SiderBar from "./SiderBar.js"

const { Header, Sider, Content } = Layout;


class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout>
        <SiderBar />
        <Layout>
         
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}




export default SiderDemo