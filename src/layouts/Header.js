import React from "react"

import { Layout, Icon, Menu  }  from 'antd'

import styles from  "@/layouts/Header.mod"

const {  Header:AntHeader  } = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


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

                 <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    className = "pull-right"
                    style  = {{height:'64px',lineHeight:'64px',border:'none',marginRight:'20px'}}
                >
                    <Menu.Item key="mail">
                     <Icon type="mail" style = {{fontSize:'20px'}}  />
                    </Menu.Item>
                    <SubMenu   title={<span style = {{fontSize:"16px"}} ><Icon type="user"  />菜籽</span>}>
                            <Menu.Item key="setting:1">设置</Menu.Item>
                            <Menu.Item key="setting:2">资料</Menu.Item>
                            <Menu.Item key="setting:3">退出</Menu.Item>
                    </SubMenu>
                </Menu>


            </AntHeader>
        )
    }

}


export default Header;