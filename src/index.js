import React from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router,
    Route,
    Link,
    Provider
 }  from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';


import Layout from "@/layouts/Layout.js";




import "@/common/common.less"
import "@/common/tool.less"






ReactDOM.render(
<Router>
    <div style={{height:"100%"}}>
        <Route  path="/" component={Layout}/>
    </div>
</Router>
, document.getElementById('root'));
registerServiceWorker();
