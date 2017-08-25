import React from "react"

import { Layout }  from 'antd'

 const {  Content:AntContent  } = Layout;

class Content extends React.Component {



    render(){

        return (
            <AntContent style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                Content
            </AntContent>
        )
    }

}


export default Content;