import React from "react"

import { Menu as AntMent, Icon }  from "antd"


class Menu extends  React.Component {

    render(){
        return (
            <AntMent theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <AntMent.Item key="1">
                    <Icon type="user" />
                    <span>nav 1</span>
                    </AntMent.Item>
                    <AntMent.Item key="2">
                    <Icon type="video-camera" />
                    <span>nav 2</span>
                    </AntMent.Item>
                    <AntMent.Item key="3">
                    <Icon type="upload" />
                    <span>nav 3</span>
                    </AntMent.Item>
             </AntMent>

        )
    }

}


export default Menu;




