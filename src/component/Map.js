import React,{Component} from 'react';
import '../assets/css/map.css';
import Loading from './loading'
import Search from './Search'
class Map extends Component{
    constructor(){
        super();
        this.state={
            map:'',
            isLoadingShow:true,
            loadingContent:'地理位置获取中...'
        }
        this.setPlace = this.setPlace.bind(this);
    }
    componentDidMount(){
        let _this =this;
        let map = new BMap.Map('container');
        this.setState({
            map:map
        });
        let point = new BMap.Point(116.404, 39.915);
        map.centerAndZoom(point, 14);

        let navigationControl = new BMap.NavigationControl({
            // 靠左上角位置
            anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
            // LARGE类型
            type: BMAP_NAVIGATION_CONTROL_LARGE,
            // 启用显示定位
            enableGeolocation: true
        });
        let bottom_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT});//
        map.addControl(navigationControl);
        map.addControl(bottom_left_control);
        // 添加定位控件
        let geolocationControl = new BMap.GeolocationControl();
        geolocationControl.addEventListener("locationSuccess", function(e){
            // 定位成功事件
            var address = '';
            address += e.addressComponent.province;
            address += e.addressComponent.city;
            address += e.addressComponent.district;
            address += e.addressComponent.street;
            address += e.addressComponent.streetNumber;
        });
        geolocationControl.addEventListener("locationError",function(e){
            // 定位失败事件
            alert(e.message);
        });
        map.addControl(geolocationControl);


        let geolocation = new BMap.Geolocation();//自动定位
        geolocation.getCurrentPosition(function(r){

            if(this.getStatus() == BMAP_STATUS_SUCCESS){
                var mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);
                _this.setState({//卸载loading
                    isLoadingShow:false
                });
            }
            else {
                _this.setState({//修改提示信息
                    loadingContent:'位置获取失败'
                });
                setTimeout(function () {//一秒后卸载loading
                    _this.setState({
                        isLoadingShow:false
                    });
                },1000)

            }
        },{enableHighAccuracy: true});
        //关于状态码
        //BMAP_STATUS_SUCCESS	检索成功。对应数值“0”。
        //BMAP_STATUS_CITY_LIST	城市列表。对应数值“1”。
        //BMAP_STATUS_UNKNOWN_LOCATION	位置结果未知。对应数值“2”。
        //BMAP_STATUS_UNKNOWN_ROUTE	导航结果未知。对应数值“3”。
        //BMAP_STATUS_INVALID_KEY	非法密钥。对应数值“4”。
        //BMAP_STATUS_INVALID_REQUEST	非法请求。对应数值“5”。
        //BMAP_STATUS_PERMISSION_DENIED	没有权限。对应数值“6”。(自 1.1 新增)
        //BMAP_STATUS_SERVICE_UNAVAILABLE	服务不可用。对应数值“7”。(自 1.1 新增)
        //BMAP_STATUS_TIMEOUT	超时。对应数值“8”。(自 1.1 新增)

       // let local = new BMap.LocalSearch(map, {//结果面板
           // renderOptions: {map: map, panel: "placeResult"}
        //});
        //local.search("餐饮");//关键词跳转
    }
    setPlace(myValue){
        let _this =this
        _this.state.map.clearOverlays();    //清除地图上所有覆盖物
        function myFun(){
            var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
            _this.state.map.centerAndZoom(pp, 18);
            _this.state.map.addOverlay(new BMap.Marker(pp));    //添加标注
        }
        let local = new BMap.LocalSearch(_this.state.map, { //智能搜索
            onSearchComplete: myFun
        });
        local.search(myValue);
    }
    render(){
        return(
            <div className="map">
                {this.state.isLoadingShow?<Loading loadingContent={this.state.loadingContent}/>:''}
                <div id="container"></div>
                <div id="placeResult"></div>
                <Search setPlace={this.setPlace}/>
            </div>
        )
    }
}
export default Map