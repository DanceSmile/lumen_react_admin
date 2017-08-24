import React from "react"

import { Layout, Menu, Icon } from 'antd';

import Menus from "../Menu"

const { Sider } = Layout;


const SiderBar = () => (

    <Sider
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
    >
        <div className="logo" />
        <Menus />
    </Sider>


)


export default SiderBar