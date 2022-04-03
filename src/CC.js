import React,{Component} from 'react'
import './Counter.css'
class CC extends React.Component{
    constructor(){
        super();
        this.state={
            number:0
        }
    }
    INR=()=>{
        this.setState({number:this.state.number+1})
    }
    DECR=()=>{
        this.setState({number:this.state.number-1})

    }
    render(){
        return <div>
            <h1>{this.state.number}</h1>
            <button onClick={this.INR}>ADD</button>
            <button onClick={this.DECR}>Subtract</button>
        </div>
    }
}
export default CC