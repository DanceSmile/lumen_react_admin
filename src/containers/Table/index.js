import React from "react"

import { Table as AntTable , Row , Col }  from "antd"

import Panel from "@/components/Panel"





const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];



const Table = () => (

    <Row>
      <Col span={24}>
          <Panel title = "基础表格" >
             <AntTable dataSource={dataSource} columns={columns} />
          </Panel>
      </Col>

    </Row>    
)




export default  Table;