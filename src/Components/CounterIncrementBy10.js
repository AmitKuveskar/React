import React, { Component } from "react";

class CounterIncrementBy10 extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
increment(){
    this.setState(
        {
            count: this.state.count+10
        }
    )
}

    render(){
        return(
            <div>
                <div>
                    Count:-{this.state.count}
                </div>
                <button onClick={()=> this.increment()}>Click Me</button>
            </div>
        )
    }
}

export default CounterIncrementBy10;