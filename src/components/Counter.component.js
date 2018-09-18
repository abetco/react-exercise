import React, { Component } from 'react'
import './../styles/instructions.css'

class Counter extends Component {
  state = { count: 0 }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  render() {
    return (
      <div ClassName="counter">
        <center>
          <h1>
            <label>{this.state.count}</label>
          </h1>
        </center>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

export default Counter
