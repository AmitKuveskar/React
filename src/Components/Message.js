import React, { Component } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state={
            message: "Congratulations Amit"
        }
    }
changeMessage(){
    this.setState(
        {
            message:'You are placed at Capgemini'
        }
    )
}

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>click me</button>
            </div>
        )
    }
}

export default Message;