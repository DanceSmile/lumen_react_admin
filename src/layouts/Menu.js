import React from "react"

import { Menu as AntMent, Icon }  from "antd"

import { route, Link } from 'react-router-dom'

const SubMenu = AntMent.SubMenu;


class Menu extends  React.Component {

    render(){
        return (
            <AntMent 
              defaultSelectedKeys={[]}
              defaultOpenKeys={[]}
              mode="inline"
              theme="dark"
              inlineCollapsed={false}
          >
                    <AntMent.Item key="1">
                        <Link to = "/" >
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
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>UI元素</span></span>}>
                        <AntMent.Item key="11">面板</AntMent.Item>
                        <AntMent.Item key="12">按钮</AntMent.Item>
                        <AntMent.Item key="13">气泡</AntMent.Item>
                        <AntMent.Item key="14">弹出式反馈</AntMent.Item> 
                        <AntMent.Item key="15">标签页</AntMent.Item>
                        <AntMent.Item key="16">文字提示</AntMent.Item>
                        <AntMent.Item key="17">编辑器</AntMent.Item>
                    </SubMenu>

                    

                    <AntMent.Item key="4">
                        <Icon type="inbox" />
                        <span>数据</span>
                    </AntMent.Item>
                    <AntMent.Item key="5">
                        <Icon type="inbox" />
                        <span>表单</span>
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




