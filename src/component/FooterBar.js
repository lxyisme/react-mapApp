import React from 'react';
import {Link} from 'react-router'
import '../assets/css/footerBar.css'
const FooterBar =props=>(
    <ul className="footerBar">
        <li><Link to='/map' activeClassName='footerBarActive'><b className="iconfont">&#xe609;</b>地图</Link></li>
        <li><Link to='/mappath' activeClassName='footerBarActive'><b className="iconfont">&#xe62b;</b>路线</Link></li>
        <li><Link activeClassName='footerBarActive'><b className="iconfont">&#xe610;</b>周边</Link></li>
    </ul>
);
export default FooterBar