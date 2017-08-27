import React  from "react"

import {Row, Col} from "antd"


class Flex extends React.Component {

    render (){
        return (
            <div>
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