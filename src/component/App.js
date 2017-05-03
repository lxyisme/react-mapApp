import React,{Component} from 'react';
import FooterBar from './FooterBar'
class App extends Component{
    componentDidMount(){
        this.props.router.location.pathname=='/'?this.props.router.push('/map'):'';
    }
    render(){
        return (
            <div className="app">
                {this.props.children}
                <FooterBar/>
            </div>
        )
    }
}
export default App;
