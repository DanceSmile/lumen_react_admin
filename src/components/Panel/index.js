import React from "react"

import {Card }  from "antd"

import styles from "@/components/Panel/panel.mod"


/**
 * 
 * Panel 组件
 * 
 * 默认在 antd 的 Card 的组件的基础上添加 
 * 
 * 组件之间的上下间距最小为 12px
 * 组件之间的左右间距最下为 16px 
 * 
 * 
 * 需要配合 Row (默认有marin 左右 -8px 的 间距 ) 使用 可以抵消最临界的间距
 *
 * 
 * 
 * @author cailei 
 * @github: DanceSmile
 * 
 */



class Panel extends React.Component {

    render (){

        return (
             <div className={styles.panel}>
                <Card  {...this.props} >
                    {this.props.children}
                </Card> 
             </div>

        )
    }
}

Panel.Grid =  Card.Grid

export default Panel;