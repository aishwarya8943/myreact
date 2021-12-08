import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {    // this is an object in super()
            count:0
             
        }
        
    }

    increment(){
        this.setState({          //in setstate react will know that it shd be re-rendered. 
            count:this.state.count + 1
        })
        console.log(this.state.count)
    }
    
    render() {
        return (
            <div>
                <div>count -{this.state.count}</div>
                <button onClick = {() => this.increment()}>Increment </button>   
            </div>
        )
    }
}

export default Counter;
