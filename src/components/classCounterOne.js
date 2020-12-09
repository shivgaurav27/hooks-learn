import React, { Component } from 'react'

export default class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    incrementCount = () =>{
      this.setState(prevState=>{
          return{
              count:prevState.count+1
          }
      })
    }

    componentDidMount(){
        document.title = `you have ${this.state.count} times`
    }
    componentDidUpdate(){
        document.title = `You have clicked ${this.state.count} times`
    }
    render() {
        return (
            <div>
                    <button  onClick={this.incrementCount}>Count class {this.state.count}</button>
            </div>
        )
    }
}
