import React from "react"

import { Layout, Breadcrumb, Row, Col, BackTop }  from 'antd'

import styles from "@/layouts/Content.less"

 const {  Content:AntContent  } = Layout;


class Content extends React.Component {



    render(){
        
        return (
            <AntContent  >
                <Breadcrumb className = {styles.breadcrumb} >
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">表格</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">基础表格</a></Breadcrumb.Item>
                </Breadcrumb>

                <div className={styles.container}>
                
                    <div className='ant-content content'>
                        <div className="content-inner">
                            {this.props.children}
                        </div>

                    </div>
                </div>

                <div>
                    <BackTop />
                </div>
            
            </AntContent>
        )
    }

}


export default Content;