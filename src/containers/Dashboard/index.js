import React from "react";

import {
  Message,
  BackTop,
  Table,
  Row,
  Col,
  Card,
  Button,
  Input,
  DatePicker,
  Popconfirm,
  Switch,
  Dropdown,
  Menu,
  Icon,
  message,
  Modal,
  Tooltip
} from "antd";

import data from "@/mock";

import WrappedRegistrationForm from "./Form.js"



const Search = Input.Search;
const { MonthPicker, RangePicker } = DatePicker;


// age
// :
// 24
// color
// :
// "http         : //dummyimage.com/400"
// created_at
// :
// "1971-10-26 18: 23: 59"
// descript
// :
// "治而济于复织较回改部放花。拉素要住队毛性水等每革团们式。导米条效它南个率等整门米。引放层法气事育带其住本马里马。你把干看头属通主或光新才压。"
// home
// :
// "山西省 临汾市 曲沃县"
// id
// :
// 2
// photo
// :
// "https        : //unsplash.it/400/800/?random"
// sex
// :
// "女"
// updated_at
// :
// "2001-10-25 18: 12: 30"
// username
// :
// "何娜"


const actions = (
  <Menu>
   <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">查看</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">编辑</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">删除</a>
    </Menu.Item>
   
  </Menu>
);


const columns = [
  { title:'序号',key:'id',dataIndex:'id' },
  { title:'颜色',key:"color",dataIndex:'color' , render: (text) => <div style={{background:text,width:40,height:40,borderRadius:"50%"}}> </div>  },
  { title:'姓名',key:'username',dataIndex:'username' },
  { title:'年龄',key:'age',dataIndex:'age' },
  { title:'性别',key:'sex',dataIndex:'sex' },
  { title:'照片',key:'photo',dataIndex:'photo',render:(record,row,index) => {return (<img style={{width:40,height:40}} src={record} alt="" />)} },
  { title:'住址',key:'home',dataIndex:'home'},
  { title:'创建时间',key:'created_at',dataIndex:'created_at' },
  { title:'更新时间',key:'updated_at',dataIndex:'updated_at' },
  { title: '操作', dataIndex: '', key: 'x', render: (text,row,index) => { return (
      <div>
          
           <Tooltip title="编辑">
                 <Icon type="edit" onClick = {
               () =>{
                console.log(text,row,index)
                  return  message.success(`当前需要选中的是:${row.id}  姓名:${row.username}  动作类型: 编辑`);
               }
           } style = {{fontSize:16,marginRight:10}} />
           </Tooltip>
           <Tooltip title="删除">
                <Icon type="delete" style = {{fontSize:16,marginRight:10}} />
           </Tooltip>
           <Tooltip title="查看">
               <Icon type="eye-o" style = {{fontSize:16,marginRight:10}} />
           </Tooltip>
           
      </div>
   
  )} },
];



const dataSource =  data.users;



function onChange(date, dateString) {
  console.log(date, dateString);
}

function handleDeleteItems(){}


class Dashboard extends React.Component {

   
   state = {
    ModalText: 'Content of the modal',
    visible: false,
  }

 render(){
    return (
        <div>
        <Row>
        <Col span={24}>
            <Card title="全国青少年分布">
            <Row type="flex">
                <Col span={4}>
                <Search
                    placeholder="input search text"
                    size="large"
                    onSearch={value => console.log(value)}
                />
                </Col>
                <Col span={4}>
                <RangePicker
                    onChange={onChange}
                    size="large"
                    style={{ marginLeft: "16px" }}
                />
                </Col>

                <Col span={16}>
                <div style={{}}>
                    <Button
                    type="primary"
                    size="large"
                    style={{
                        marginLeft: "16px",
                        marginRight: "16px"
                    }}
                    >
                    Search
                    </Button>
                    <Button size="large">Reset</Button>
                </div>
                </Col>
            </Row>

            <Row style={{ marginBottom: 24, textAlign: "right", fontSize: 13 }}>
                <Col span={24}>
                <Button type="primary" size="large" style={{ marginLeft: 8 }} onClick  ={
                    () => {
                        this.setState({
                            visible:true
                        })
                    }
                }>
                    创建
                </Button>
                <Button type="primary" size="large" style={{ marginLeft: 8 }}>
                    导出
                </Button>
                <Popconfirm
                    title={"Are you sure delete these items?"}
                    placement="left"
                    onConfirm={handleDeleteItems}
                >
                    <Button type="primary" size="large" style={{ marginLeft: 8 }}>
                    删除
                    </Button>
                </Popconfirm>
                </Col>
            </Row>

            <Table
                rowSelection={[]}
                columns={columns}
                expandedRowRender={record => <p>{record.descript}</p>}
                dataSource={dataSource}
                showHeader={true}
                footer={curentPageData => ""}
                pagination={{
                style: {
                    float: "unset",
                    textAlign: "center"
                }
                }}
            />
            </Card>
        </Col>
        </Row>

        <Row>
        <Modal
            width = {750}
            title="创建新用户"
            visible={this.state.visible}
            closable = {true}
            onOk={()=>console.log('ok')}
            confirmLoading={false}
            onCancel={() => {
                this.setState({
                    visible:false
                })
            }}
        >
            <WrappedRegistrationForm/>
        </Modal>
        </Row>
    </div>
    )
    }

}


export default  Dashboard