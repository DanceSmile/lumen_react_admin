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




import "@/bootstrap"





ReactDOM.render(
<Router>
    <Route  path="/" component={Layout}/>
</Router>
, document.getElementById('root'));
registerServiceWorker();
