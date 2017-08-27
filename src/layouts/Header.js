import React from "react"

import { Layout, Icon  }  from 'antd'

import styles from  "@/layouts/Header.less"

const {  Header:AntHeader  } = Layout;

class Header extends React.Component {

    constructor (props){
        super()
        console.log(props)
    }

    state = {
        collapsed: false,
    };

    


    render(){

        return (
            <AntHeader style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className={styles.trigger}
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick = {this.props.handleToggle}
                    
                />

            </AntHeader>
        )
    }

}


export default Header;