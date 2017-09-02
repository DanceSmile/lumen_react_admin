import React from "react"

import { Table as AntTable , Row , Col, Icon, Button }  from "antd"

import Panel from "@/components/Panel"



// columns
// dataIndex 列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法


const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key:'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action1',
  render: (text, record) => (
    <span>
      <a href="#">Action 一 {record.name}</a>
      <span className="ant-divider" />
      <a href="#">Delete</a>
      <span className="ant-divider" />
      <a href="#" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];

const data = [
    {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
   }, 
   {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, 
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '5',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '6',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '7',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '8',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '9',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '10',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '11',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '12',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '13',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }

];





class Table extends React.Component{

  state = {
    loading:false,
    selectedRowKeys:[]
  }

  onSelectChange (selectedRowKeys, selectedRows){
    //  this.setState(selectedRowKeys)
    console.log(selectedRowKeys)
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  
  start = () => {
     console.log(`start`)
     this.setState({
          loading:true
      })
     setTimeout(function(){
        this.setState({
          selectedRowKeys:[],
          loading:false
        })
     }.bind(this),1000)
     
     console.log(`end`)
  }
  render(){
    const { selectedRowKeys }  =  this.state
    const rowSelection =  {
       selectedRowKeys,
       onChange : this.onSelectChange,
       onSelectAll: () =>{

       },
       onSelectInvert:()=>{

       },
       selections:[
         {
           key: 'odd',
           text: '偶数列',
           onSelect: (rows) => {
              let odd = [];
             rows.map(function(val,key){
                if(parseInt(key)%2==1){
                   odd.push(val)
                }
             })

             this.setState({
               selectedRowKeys:odd
             })
           }
         },
         {
           key: 'even',
           text: '基数列',
           onSelect: (rows) => {
             let even = [];
             rows.map(function(val,key){
                if(parseInt(key)%2==0){
                   even.push(val)
                }
             })

             this.setState({
               selectedRowKeys:even
             })
            
           }
         }
       ]
       
       
       
       
    }

    return (
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
                <AntTable columns={columns} dataSource={data} />
              </Panel>
          </Col>

          <Col span={24}>
              <Panel title = "第一列是联动的选择框" >
                <div style={{marginBottom:"16px"}}>
                  <Button 
                      type="primary"
                      onClick={this.start}
                      loading={this.state.loading}
                    > reload </Button>
                </div>

                <AntTable rowSelection = { rowSelection } columns={columns} dataSource={data} />
              </Panel>
          </Col>
        </Row>    
  )
  }

}




export default  Table;