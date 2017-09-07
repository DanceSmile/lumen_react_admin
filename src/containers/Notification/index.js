import React from "react"

import { notification , Card, Row, Col, Button, InputNumber , Input,Select}  from "antd"

const Option = Select.Option;


const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];

class  Index  extends  React.Component {

    state = {
        duration : 4,
        defaultValue:4
    }

    onChange(value){

        console.log(value.target.value)
        this.setState({
            duration:parseFloat(value.target.value),
            placement:'topRight'
        })
    }
    openNotificationWithIcon(type){

         const args = {
                message: 'Notification Title',
                description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
                duration: this.state.duration,
                placement:this.state.placement
           };
         notification[type](args);
    }

     openNotification ()  {

          const args = {
                message: 'Notification Title',
                description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
                duration: this.state.duration,
                placement: this.state.placement
           };
           notification.open(args);
     };

handleChange(value){
    this.setState({
        placement:value
    })  
}

    render () {
        return (
            <div>
                
            <Row>
                <Col span = {5}>
                    <Card 
                        title = {'延迟过渡时间'} 
                    >
                         <Input 
                         defaultValue={this.state.defaultValue} 
                         value = {this.state.duration}
                         onChange={this.onChange.bind(this)} />
                    </Card>
                    <Card title="弹出位置设置">
                      < div>
                            <Select defaultValue="topRight" style={{ width: 120 }} onChange={this.handleChange.bind(this)}>
                                {options.map(function(value,i){
                                    return  <Option key={value} value={value}>{value}</Option>
                                })}
                            </Select>
                      </div>
                    </Card>
                </Col>

            </Row>
            <Row>
                <Col  span = {6}  >
                    <Card title="带有图标的通知提醒框" >
                        <Button style={{marginLeft:'6px'}} onClick={ () => this.openNotificationWithIcon('success') }>Success</Button>
                        <Button style={{marginLeft:'6px'}} onClick={ () =>this.openNotificationWithIcon('info') }>Info</Button>
                        <Button style={{marginLeft:'6px'}} onClick={ () =>this.openNotificationWithIcon('warning') }>Warning</Button>
                        <Button style={{marginLeft:'6px'}} onClick={ () =>this.openNotificationWithIcon('error') }>Error</Button>
                    </Card>

                </Col>

                <Col  span = {6} >
                    <Card>
                        <Button
                             style = {{margin:"0px 6px"}}
                             type="primary"
                             onClick={this.openNotification.bind(this)}
                        >{this.state.duration} 秒后自动关闭</Button>
                    </Card>

                </Col>
            </Row>

            </div>
            
        )
    }
}

export default Index;