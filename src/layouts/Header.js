import React from "react"

import { Layout, Icon  }  from 'antd'

import styles from  "@/layouts/Header.less"

const {  Header:AntHeader  } = Layout;

class Header extends React.Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
        collapsed: !this.state.collapsed,
        });
    }


    render(){

        return (
            <AntHeader style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className={styles.trigger}
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    
                />

            </AntHeader>
        )
    }

}


export default Header;