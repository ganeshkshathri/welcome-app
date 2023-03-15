import { Component } from "react";
import "./index.css"

class Welcome extends Component{
    state={isLoggedIn:false}
    changeLoginStatus=()=>{
        this.setState(prevState=>({isLoggedIn:!prevState.isLoggedIn}))
    }
    render(){
        let {isLoggedIn} = this.state
        let renderElementIs
        if(isLoggedIn === false){
            renderElementIs=<button className="subscribe-button" onClick={this.changeLoginStatus}>Subscribe</button>
        }
        else{
            renderElementIs=<button className="subscribe-button" onClick={this.changeLoginStatus}>Subscribed</button>
        }
        return(
            <div className="app-container"> 
                <h1 className="heading">WELCOME</h1>
                <p className="description">Thank you! Happy Learning</p>
                {renderElementIs}
            </div>
        )
    }
}
export default Welcome