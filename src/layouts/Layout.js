import React from "react"

import { Layout as AntLayout }  from 'antd'

// Layout#

// 布局容器。
// 参数	说明	类型	默认值
// style	指定样式	object	-
// className	容器 className	string	-
// Layout.Header Layout.Footer Layout.Content API 与 Layout 相同



import { Header, Sider, Content, Footer, Menu } from "@/layouts"


import "@/layouts/Layout.less"

import  styles  from "@/layouts/Layout.less"

console.log(styles)

class Layout extends React.Component{

    render(){
        return (

                <AntLayout  className='ant-layout-has-sider layout'>
                    <Sider menus = {Menu} >left sidebar</Sider>
                    <AntLayout>
                        <Header  >header</Header>
                        <Content>main content</Content>
                    </AntLayout>
                </AntLayout>
                

        )
    }

}



export default Layout