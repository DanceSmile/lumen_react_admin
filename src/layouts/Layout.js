import React from "react"

import { Layout as AntLayout }  from 'antd'

// Layout#

// 布局容器。
// 参数	说明	类型	默认值
// style	指定样式	object	-
// className	容器 className	string	-
// Layout.Header Layout.Footer Layout.Content API 与 Layout 相同



import { Header, Sider, Content, Footer, Menu } from "@/layouts"



// import  styles  from "@/layouts/Layout.less"


class Layout extends React.Component{

    constructor(props){
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

                <AntLayout  className='ant-layout-has-sider auto-height' >
                    <Sider collapsed = {this.state.collapsed} >
                        <Menu />
                    </Sider>
                    <AntLayout>
                        <Header  handleToggle = {this.toggle.bind(this)} >header</Header>
                        <Content>main content</Content>
                        <Footer>React-Admin ©2017 Created by 1215850394@qq.com</Footer>
                    </AntLayout>
                </AntLayout>
                
        )
    }

}



export default Layout