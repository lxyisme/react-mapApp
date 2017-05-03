import React,{Component} from 'react';
import HeaterTitle from './headerTitle'
import '../assets/css/mappath.css'
class MapPath extends Component{
    activeBtn(event){
        document.getElementsByClassName('activePath')[0].className=''
        if (event.target.tagName == 'LI'){
            event.target.className = 'activePath'
        }else if (event.target.tagName == 'A'){
            event.target.parentNode.className = 'activePath'
        }
    }
    render(){
        return(
            <div className="mapPath">
                <HeaterTitle title="路线规划"/>
                <ul className="selectPathWay">
                    <li onClick={this.activeBtn.bind('transit')} className="activePath"><a href="javascript:;">公交</a></li>
                    <li onClick={this.activeBtn.bind('driving')}><a href="javascript:;">驾车</a></li>
                    <li onClick={this.activeBtn.bind('walking')}><a href="javascript:;">骑行</a></li>
                    <li onClick={this.activeBtn.bind('walking')}><a href="javascript:;">步行</a></li>
                </ul>
                <div className="pointWarp">
                    <p><input type="text" className="pointStart" placeholder="请输入起点位置..."/></p>
                    <p className="iconfont">&#xe73e;</p>
                    <p><input type="text" className="pointEnd" placeholder="请输入终点位置..."/></p>
                    <p><input type="button" className="searchPointBtn" value='搜索'/></p>
                </div>
            </div>
        )
    }
}
export default MapPath