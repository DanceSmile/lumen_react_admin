import React from "react"

import { Layout as AntLayout }  from 'antd'

import { Route } from "react-router-dom"


import Dashboard from "@/containers/Dashboard"
import Data from "@/containers/Data"
import Panel from "@/containers/Panel"
import Form from "@/containers/Form"
import Table from "@/containers/Table"
import Page from "@/containers/Page"
import Flex from "@/containers/Flex"


import { LayoutRoutes } from "@/routes"


// Layout#

// 布局容器。
// 参数	说明	类型	默认值
// style	指定样式	object	-
// className	容器 className	string	-
// Layout.Header Layout.Footer Layout.Content API 与 Layout 相同



import { Header, Sider, Content, Footer, Menu } from "@/layouts"






// import  styles  from "@/layouts/Layout.less"


class Layout extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            collapsed : false
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render(){
        return (
                <AntLayout  className='ant-layout-has-sider ' style={{height:'100vh'}}>
                    <Sider collapsed = {this.state.collapsed} >
                        <Menu />
                    </Sider>
                    <AntLayout>
                        <Header  handleToggle = {this.toggle.bind(this)} >header</Header>
                        <Content>
                            <LayoutRoutes />
                        </Content>
                        <Footer>感谢 antd-design 为开源做出的贡献</Footer>
                    </AntLayout>
                </AntLayout>
                
        )
    }

}



export default Layout