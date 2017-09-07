import React from "react"

import { 
    HashRouter as Router,
    Route,
    Link,
    Provider
 }  from "react-router-dom"


import App from "@/layouts/Layout.js"
import Dashboard from "@/containers/Dashboard"
import Data from "@/containers/Data"
import Panel from "@/containers/Panel"
import Form from "@/containers/Form"
import Table from "@/containers/Table"
import Page from "@/containers/Page"
import Flex from "@/containers/Flex"
import Button from "@/containers/Button"
import Compose from "@/containers/Compose"
import Notifications from "@/containers/Notification"

const Routes = () => (
    <Route path = '/' component = { (props) => (
        <App>
            <Route path = "/dashboard" exact component = {Dashboard}  />
            <Route path = "/data" exact component = {Data} />
            <Route path = "/panel" exact component = {Panel} />
            <Route path = "/table" exact component = {Table} />
            <Route path = "/form" exact component = {Form} />
            <Route path = "/flex" exact component = {Flex} />
            <Route path = "/button" exact component = {Button} />
            <Route path = "/compose" exact component = {Compose} />
            <Route path = "/notification" exact component = {Notifications} />
        </App>
    )}>
    </Route>
 )





export default Routes;
