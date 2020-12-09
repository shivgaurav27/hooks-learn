import React, { Component } from 'react'

export default class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name:''
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
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            document.title = `You have clicked ${this.state.count} times`
        }
    }
    render() {
        return (
            <div>
                    <input type='text' value={this.state.name} onChange={e=>this.setState({name:e.target.value})} />
                    <button  onClick={this.incrementCount}>Count class {this.state.count}</button>
            </div>
        )
    }
}
