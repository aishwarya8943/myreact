import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             comment :'',
             topic :''

        }
    }

    handleUsernameChange =(event)=>{
        this.setState({username : event.target.value})
    }

    handleComments = (event)=>{
        this.setState({
            comment : event.target.value})
    }  
    
    handleTopicChange  =(event)=>{
        this.setState({
            topic : event.target.value})     
    }

    handleSumitChange = (event)=>{
        alert(`${this.state.username} ${this.state.comment}${this.state.topic}`)
        event.preventDefault()

    }
    
    render() {
        return (
            <form onSubmit = {this.handleSumitChange}>
                <label> Username</label>
                <input type="text" value ={this.state.username} onChange ={this.handleUsernameChange}/>
                <div>
                    <label>Comments</label>
                    <textarea value ={this.state.comment} onChange ={this.handleComments}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value = {this.state.topic} onChange ={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">angular</option>
                        <option value="python">python</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
             
        )
    }
}

export default Form
