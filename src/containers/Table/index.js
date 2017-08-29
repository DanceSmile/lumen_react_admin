import React from "react"

import { Table as AntTable , Row , Col }  from "antd"

import Panel from "@/components/Panel"







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


const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  }, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }
];





const Table = () => (

    <Row>
      <Col span = {24}>
          <Panel  title = '何时使用'>
          当有大量结构化的数据需要展现时；<br/>
          当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。
          </Panel>
          <Panel >
            <p>
            按照 React 的规范，所有的组件数组必须绑定 key。<br/>
            在 Table 中，dataSource 和 columns 里的数据值都需要指定 key 值。<br/>
            对于 dataSource 默认将每列数据的 key 属性作为唯一的标识。<br/>
            如果你的数据没有这个属性，务必使用 rowKey 来指定数据列的主键。<br/>
            若没有指定，控制台会出现以下的提示，表格组件也会出现各类奇怪的错误。</p>
          </Panel>
      </Col>
      <Col span={24}>
          <Panel title = "基础表格" >
             <AntTable dataSource={dataSource} columns={columns} />
          </Panel>
           <Panel title = "基础表格" >
             <AntTable dataSource={dataSource} columns={columns} />
          </Panel>
      </Col>
         

    </Row>    
)




export default  Table;