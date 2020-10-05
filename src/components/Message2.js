import React, { Component } from 'react'

class Message2 extends Component {
    constructor(){
        super()
        this.state = {
            message2: 'Text'
        }
    }
    changeMessage2 () {
        this.setState({
            message2: 'Another Text'
        })
    }
    render () {
        return (
            <div>
                <p>{this.state.message2}</p>
                <button onClick = {() => this.changeMessage2()}> Press </button>
            </div>
        )
    }
}

export default Message2