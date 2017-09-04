import React  from "react"

import {Row, Col, Card} from "antd"


class Flex extends React.Component {

    render (){
        return (
            <div>

            <Card title=" 设计规则#" extra={<a href="">More</a>} style={{ width: 300 }}>
                <p> 一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。</p>
                <p>顶部导航（大部分系统）：一级导航高度 64px，二级导航 48px。</p>
                <p>顶部导航（展示类页面）：一级导航高度 80px，二级导航 56px。</p>
            </Card>

                <Row gutter = {10}>
                        <Col className="gutter-row" span={6}>
                          <div className="gutter-box">col-6</div>
                       </Col>
                       <Col className="gutter-row" span={6}>
                          <div className="gutter-box">col-6</div>
                       </Col>
                       
                       <Col className="gutter-row" span={6}>
                          <div className="gutter-box">col-6</div>
                       </Col>
                       <Col className="gutter-row" span={6}>
                          <div className="gutter-box">col-6</div>
                       </Col>
                       
                     </Row>
                     <Row gutter = {10}>
                       
                       <Col className="gutter-row" span={6}>
                          <div className="gutter-box">col-6</div>
                       </Col>
                       
                       <Col className="gutter-row" span={6}>
                          <div className="gutter-box">col-6</div>
                       </Col>
                       <Col className="gutter-row" span={6}>
                          <div className="gutter-box">col-6</div>
                       </Col>
                       <Col className="gutter-row" span={6}>
                          <div className="gutter-box">gutter-6</div>
                       </Col>
                     </Row> 
            </div>
        )
    }
}


export default Flex;