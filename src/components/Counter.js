import React, { Component } from 'react'

class Counter extends Component {
    constructor (){
        super()
        this.state = {
            count: 0
        }
    }
    incrementButton(){
        this.setState({
            count: this.state.count + 1
        },
        () => {
            console.log('Callback Value', this.state.count)
        }
        )
    }
    decrementButton(){
        this.setState({
            count: this.state.count - 1
        }
        )
    }
    render() {
        return (
            <div>
                <p>
                    <button onClick = { () => this.decrementButton()}>Decrement</button>
                    count {this.state.count}
                    <button onClick = { () => this.incrementButton()}>Increment</button> 
                </p>
                
            </div>
        )
    }
}

export default Counter
