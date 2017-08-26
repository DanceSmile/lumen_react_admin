import React from "react"

import { Layout }  from 'antd'

const {  Footer:AntFooter } = Layout;


class Footer extends React.Component {


   render(){

        return (
            <AntFooter style={{ textAlign: 'center' }} >
                {this.props.children}
            </AntFooter>
        )
    }

}


export default Footer;