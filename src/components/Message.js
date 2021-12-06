import React ,{Component } from "react";


class Message extends Component{
    constructor(){
        super()
        this.state = { 
            message : 'Welcome visitor'}

        }
        changeMessage(){                 // setting the new state in the component.
            this.setState({
                message: 'Thank you for subscribing'  //messagea after clicking.
            })
        }
    
    render(){
        return (
        <div>
            <h1> {this.state.message} </h1>
            <button onClick = {() => this.changeMessage()}>Subscribe</button>
        </div>
        )   
    }
}
export default Message;  // used for exporting the component so that it could be used in App Js.