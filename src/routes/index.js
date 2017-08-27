import React from "react"

import { 
    BrowserRouter as Router,
    Route,
    Link,
    Provider
 }  from "react-router-dom"



import Dashboard from "@/containers/Dashboard"
import Data from "@/containers/Data"
import Panel from "@/containers/Panel"
import Form from "@/containers/Form"
import Table from "@/containers/Table"
import Page from "@/containers/Page"
import Flex from "@/containers/Flex"


const LayoutRoutes = () => (

    <div>
        <Route path = "/" exact component = {Dashboard} />
        <Route path = "/data" exact component = {Data} />
        <Route path = "/panel" exact component = {Panel} />
        <Route path = "/table" exact component = {Table} />
        <Route path = "/form" exact component = {Form} />
        <Route path = "/flex" exact component = {Flex} />
    </div>
 )





export  { 
    LayoutRoutes
};
