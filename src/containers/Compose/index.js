import  React from "react"

import { Form, Col, Row, Card }  from "antd"



import {movies} from  "@/fetch/index.js"

console.log(movies)
class  Index extends React.Component {

    render(){
        return (
            <Row>
                <Col span = {24}>
                    <Card>
                        
                    </Card>
                </Col>
            </Row>
        )
    }
}



export default Index;