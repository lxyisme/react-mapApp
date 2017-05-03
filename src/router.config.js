import React from 'react';
import {Router,Route,hashHistory} from 'react-router';
import App from './component/App';
import Map from './component/Map';
import MapPath from './component/MapPath';
const RouterConfig =props=>(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <Route path='/map' component={Map}/>
            <Route path='/mappath' component={MapPath}/>
        </Route>
    </Router>
);
export default RouterConfig;