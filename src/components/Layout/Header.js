
import React from "react"

import {Layout} from "antd"


const Header = () => (


    <Layout.Header style={{ background: '#fff', padding: 0 }}>
        <Icon
            className="trigger"
            type={thisW.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
        />
    </Layout.Header>

)

export default Header;

 


