import React from "react"

import { Layout, Breadcrumb }  from 'antd'

 const {  Content:AntContent  } = Layout;

class Content extends React.Component {



    render(){

        return (
            <AntContent style={{ margin: '0 16px', overflow: 'initial' }} >
                <Breadcrumb style = {{margin: '12px 0px'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
                <div className='ant-content'>
                        content
                </div>
            </AntContent>
        )
    }

}


export default Content;