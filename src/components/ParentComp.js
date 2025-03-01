import React, { Component } from 'react'
// import PureComp from './PureComp'
// import RegComp from './RegComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Karen'
        }
    }

    componentDidMount (){
        setInterval(() => {
            this.setState({
                name : 'Karen'
            })
        },2000)
    }
    
    render() {
        console.log('*********Parent Comp***********')
        return (
            <div>
                Parent Component
                <MemoComp name = {this.props.name}></MemoComp>
                {/* <RegComp name = {this.state.name}></RegComp> */}
                {/* <PureComp name = {this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp
