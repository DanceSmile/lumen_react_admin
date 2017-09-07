import React from "react"

import { Layout as AntLayout, BackTop, Spin  }  from 'antd'



import  NProgress from  "nprogress"


import "nprogress/nprogress.css"




// import Dashboard from "@/containers/Dashboard"
// import Data from "@/containers/Data"
// import Panel from "@/containers/Panel"
// import Form from "@/containers/Form"
// import Table from "@/containers/Table"
// import Page from "@/containers/Page"
// import Flex from "@/containers/Flex"


import { LayoutRoutes } from "@/routes"


// Layout#

// 布局容器。
// 参数	说明	类型	默认值
// style	指定样式	object	-
// className	容器 className	string	-
// Layout.Header Layout.Footer Layout.Content API 与 Layout 相同



import { Header, Sider, Content, Footer, Menu  } from "@/layouts"





NProgress.configure({ showSpinner: false })



class Layout extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            collapsed : false,
            loading:true
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentWillUpdate(){
       NProgress.start()
       console.log('componentWillUpdate')
    }
    componentDidUpdate(){
        NProgress.done()
        console.log('componentDidUpdate')
    }
    componentDidMount(){
        NProgress.done()
        this.setState({
             loading:false
        })
        console.log('componentDidMount')
    }

     componentWillUnmount() {
         NProgress.start()
         this.setState({
             loading:true
         })
         console.log('componentWillUnmount')
         
    }

    render(){
        return (
                <AntLayout  className='ant-layout-has-sider '  style={{height:'100%'}}>
                    <Sider collapsed = {this.state.collapsed} >
                        <Menu />
                    </Sider>
                    <AntLayout className = 'back-top'>
                        <Header  handleToggle = {this.toggle.bind(this)} >header</Header>
                        <Content>
                              {this.state.loading ? <Spin />: this.props.children}
                        </Content>
                        <Footer>感谢 antd-design 为开源做出的贡献</Footer>
                        <div>
                            <BackTop 
                                target={
                                    () => {
                                        return document.querySelector(".back-top")
                                    }
                                }
                            />
                        </div>
                    </AntLayout>
                </AntLayout>
                
        )
    }

}



export default Layout