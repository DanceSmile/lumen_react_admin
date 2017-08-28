import React from "react"

import { Row, Col }   from "antd"


import Panel from "@/components/Panel"


const Panels = () => (
    <div>
        <Row >
            <Col span = {6}  >
                <Panel title = "基础卡片">
                    <p>
                        最基础的面板容器，可承载文字、列表、图片、段落，常用于后台概览页面。
                    </p>
                </Panel>
            </Col>
            <Col span = {6}>
                <Panel title="带角标的面板" extra={<a href="#">More</a>} >
                     <p>
                            带角标的面板，可承载文字、列表、图片、段落，常用于后台概览页面。
                      </p> 
                </Panel>
            </Col>

            <Col  span = {6}  >

               <Panel title = "无边框面板" bordered={false} >
                    <p>
                          在灰色背景上使用无边框的卡片，可承载文字、列表、图片、段落，常用于后台概览页面。
                     </p>
                </Panel>
              
            </Col>

            <Col  span = {6} >

                <Panel >
                    <p style = {{height:"48px",lineHeight:"48px"}} >无标题的面板</p>
                        <p>
                            最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。
                     </p>
                </Panel>

            </Col>

            <Col span = {12}>
                     <Panel title="网格型内嵌卡片  -  一种常见的卡片内容区隔模式。" noHovering bodyStyle={{clear:"both"}} >
                        <Panel.Grid style={{ width: '25%', textAlign: 'center'}} >Content</Panel.Grid>
                        <Panel.Grid style={{ width: '25%', textAlign: 'center'}} >Content</Panel.Grid>
                        <Panel.Grid style={{ width: '25%', textAlign: 'center'}} >Content</Panel.Grid>
                        <Panel.Grid style={{ width: '25%', textAlign: 'center'}} >Content</Panel.Grid>
                        <Panel.Grid style={{ width: '25%', textAlign: 'center'}} >Content</Panel.Grid>
                        <Panel.Grid style={{ width: '25%', textAlign: 'center'}} >Content</Panel.Grid>
                        <Panel.Grid style={{ width: '25%', textAlign: 'center'}} >Content</Panel.Grid>
                        <Panel.Grid style={{ width: '25%', textAlign: 'center'}} >Content</Panel.Grid>
                    </Panel>
            </Col>

            
            <Col span = {12}>

               <Panel  loading title="预加载的面板" >
                    数据读入前会有文本块样式。
               </Panel>

            </Col>
        </Row>
        
   
    </div> 
)


export default  Panels