import React from "react"

import { Menu as AntMent, Icon }  from "antd"

import {  Link } from 'react-router-dom'

const SubMenu = AntMent.SubMenu;


class Menu extends  React.Component {

    render(){
        return (
            <AntMent 
              defaultSelectedKeys={['asdsad']}
              defaultOpenKeys={['asdsad']}
              mode="inline"
              theme="dark"
              inlineCollapsed={false}
          >
                    <AntMent.Item key="1">
                        <Link to = "/dashboard" >
                            <Icon type="pie-chart" />
                            <span>概览</span>
                        </Link>
                    </AntMent.Item>
                    <AntMent.Item key="2">
                        <Link to = "/panel" >
                             <Icon type="desktop" />
                              <span>面板</span>
                        </Link>
                    </AntMent.Item>
                    <AntMent.Item key="3">
                        <Link to = "/table" >
                             <Icon type="desktop" />
                              <span>表格</span>
                        </Link>
                    </AntMent.Item>
                    <AntMent.Item key="4">
                        <Link to = "/button" >
                             <Icon type="desktop" />
                              <span>按钮</span>
                        </Link>
                    </AntMent.Item>
                  
                    <AntMent.Item key="5">
                         <Link to = "/form" >
                              <Icon type="inbox" />
                            <span>表单</span>
                        </Link>
                    </AntMent.Item>
                    <AntMent.Item key="6">
                        <Icon type="inbox" />
                        <span>表格</span>
                    </AntMent.Item>

                    <AntMent.Item key="7">
                        <Icon type="inbox" />
                        <span>图表</span>
                    </AntMent.Item>

                    <AntMent.Item key="8">
                        <Icon type="inbox" />
                        <span>组件</span>
                    </AntMent.Item>

                    <AntMent.Item key="9">
                        <Icon type="inbox" />
                        <span>动画</span>
                    </AntMent.Item>

                    <AntMent.Item key="10">
                        <Icon type="inbox" />
                        <span>页面</span>
                    </AntMent.Item>
                    
             </AntMent>

        )
    }

}


export default Menu;




