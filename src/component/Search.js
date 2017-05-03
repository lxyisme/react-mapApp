import React,{Component} from 'react';
import '../assets/css/search.css'
class Search extends Component{
    constructor(){
        super();
        this.state={
            searchList:[],
            searchValue:''
        }
    }
    componentDidMount(){
        let _this = this;
        let point = new BMap.Point(116.404, 39.915);
        let search = new BMap.Autocomplete(    //建立一个自动完成的对象
            {"input" : "searchItp"
                ,"location" : point
            });

        search.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
            let str = "";
            let _value = e.fromitem.value;
            let value = "";
            if (e.fromitem.index > -1) {
                value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
            }
            str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

            value = "";
            if (e.toitem.index > -1) {
                _value = e.toitem.value;
                value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
            }
            str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
        });
        search.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
            var _value = e.item.value;
            let myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
            _this.props.setPlace(myValue);
            searchItp.value=''
        });
    }
    cleanSearch(){
        searchItp.value=''
    }
    render(){
        return(
            <div className="searchBox" >
                <div className="search">
                    <b className="iconfont">
                        &#xe601;
                    </b>
                    <input type="text" id="searchItp" placeholder="请输入您要查找的地点"/>
                    <button className="cleanSearch iconfont" onClick={this.cleanSearch}>
                        &#xe6a8;
                    </button>
                </div>
            </div>
        )
    }
}
export default Search;