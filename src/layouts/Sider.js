import React from "react"

import { Layout }  from 'antd'

import styles from  "@/layouts/Sider.less"


const {  Sider:AntSider  } = Layout;



// 侧边栏。
// 参数	说明	类型	默认值
// collapsible	是否可收起	boolean	false
// defaultCollapsed	是否默认收起	boolean	false
// reverseArrow	翻转折叠提示箭头的方向，当 Sider 在右边时可以使用	boolean	false
// collapsed	当前收起状态	boolean	-
// onCollapse	展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发	(collapsed, type) => {}	-
// trigger	自定义 trigger，设置为 null 时隐藏 trigger	string|ReactNode	-
// width	宽度	number|string	200
// collapsedWidth	收缩宽度，设置为 0 会出现特殊 trigger	number	64
// breakpoint	触发响应式布局的断点	Enum { 'xs', 'sm', 'md', 'lg', 'xl' }	-
// style	指定样式	object	-
// className	容器 className	string	-
// breakpoint width#

// {
//   xs: '480px',
//   sm: '768px',
//   md: '992px',
//   lg: '1200px',
//   xl: '1600px',
// }




class Sider extends React.Component {

   


    state = {
        collapsed: false,
    };

   

    render(){
        return (
            <AntSider
                trigger={null}
                collapsible
                collapsed={this.props.collapsed}
                className = {styles.sider}
                style = {{overflow:"auto",height:"100vh"}}
            >
                <div className={styles.logo} />
                {this.props.children}
            </AntSider>
        )
    }

}


export default Sider;