import React from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router,
    Route,
    Link,
    Provider
 }  from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

import Routes from "@/routes"





import "@/common/common.less"
import "@/common/tool.less"






ReactDOM.render(
<Router>
    <Routes />
</Router>
, document.getElementById('root'));
registerServiceWorker();
