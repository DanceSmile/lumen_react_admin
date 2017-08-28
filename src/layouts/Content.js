import React from "react"

import { Layout, Breadcrumb, Row, Col, BackTop }  from 'antd'

 const {  Content:AntContent  } = Layout;

class Content extends React.Component {



    render(){
        
        return (
            <AntContent  >
                <Breadcrumb style={{
                    height: "64px",
                    lineHeight: "64px",
                    padding: "0 24px",
                    marginBottom: "-24px"
                }}>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">表格</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">基础表格</a></Breadcrumb.Item>
                </Breadcrumb>

                <div className="container">
                
                    <div className='ant-content content'>
                        <div className="content-inner">
                            {this.props.children}
                        </div>

                    </div>
                </div>

                <div>
                    <BackTop />
                </div>,
            
            </AntContent>
        )
    }

}


export default Content;