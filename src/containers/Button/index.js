import React from "react"


import {Row, Col, Button, loading } from "antd"


import Panel from "@/components/Panel"




class Buttons extends  React.Component {


    render (){


        return (

            <Row>   
                <Col span = {12} >
                    <Panel title = "按钮类型" > 
                        <Button type="primary">Primary</Button>
                        <Button>Default</Button>
                        <Button type="dashed">Dashed</Button>
                        <Button type="danger">Danger</Button>
                    </Panel>
                </Col>

                 <Col span = {12} >
                    <Panel title = "图标按钮" > 
                            <Button type="primary" shape="circle" icon="search" />
                            <Button type="primary" icon="search">Search</Button>
                            <Button shape="circle" icon="search" />
                            <Button icon="search">Search</Button>
                            <br />
                            <Button shape="circle" icon="search" />
                            <Button icon="search">Search</Button>
                            <Button type="dashed" shape="circle" icon="search" />
                            <Button type="dashed" icon="search">Search</Button>
                    </Panel>
                </Col>

                <Col span = {12}>
                    <Panel title="加载中的状态">
                            <Button type="primary" loading={true}>
                            Loading
                            </Button>
                            <Button type="primary" size="small" loading={true}>
                            Loading
                            </Button>
                            <br />
                            <Button type="primary" loading={true} >
                            Click me!
                            </Button>
                            <Button type="primary" icon="poweroff" loading={true}>
                            Click me!
                            </Button>
                            <br />
                            <Button shape="circle" loading={true} />
                            <Button type="primary" shape="circle" loading={true} />
                    </Panel>
                </Col>

                 <Col span = {12}>
                    <Panel title="幽灵按钮" bodyStyle = {{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
                             <Button type="primary" ghost>Primary</Button>
                            <Button ghost>Default</Button>
                            <Button type="dashed" ghost>Dashed</Button>
                            <Button type="danger" ghost>danger</Button>
                    </Panel>
                </Col>



              
                <style>
                
                {`
                    button {
                        margin:10px;
                    }
                `}
                </style>
                
            </Row>
        )
    }


}


export default Buttons;

