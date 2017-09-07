import React from "react"

import { Layout, Icon, Menu ,Badge }  from 'antd'

import styles from  "@/layouts/Header.module"

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
                    mode="horizontal"
                    
                    className = "pull-right"
                    style  = {{height:'64px',lineHeight:'64px',border:'none',marginRight:'40px'}}
                   
                >
                    <Menu.Item key="full"  >
                        <Icon type="arrows-alt" />
                    </Menu.Item>
                    <Menu.Item key="1">
                        <Badge count={25} overflowCount={10} style={{marginLeft: 10}}>
                            <Icon type="notification" />
                        </Badge>
                    </Menu.Item>
                    <SubMenu title={<span className={styles.avatar} >
                                <Badge count={5}>
                                <span style={{
                                        width: '42px',
                                        height: '42px',
                                        borderRadius: '6px',
                                        background: '#eee',
                                        display: "inline-block"
                                }} />
                                </Badge>
                        </span>
                    }>
                       
                            <Menu.Item key="setting:3">个人设置</Menu.Item>
                            <Menu.Item key="setting:3">系统消息</Menu.Item>
                            <Menu.Item key="setting:4">退出登陆</Menu.Item>
                    </SubMenu>
                </Menu>



            </AntHeader>
        )
    }

}


export default Header;