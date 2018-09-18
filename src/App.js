import React, { Component } from 'react'
import { Instructions } from './components'
import { Counter } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { initialCount: 0 }
    this.handleUpdate = this.handleUpdate.bind(this)
  }
  handleUpdate = () => {
    this.setState({ initialCount: this.inputNode.value })
    this.render()
  }

  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          shouldDisplayImage={true}
          items={['apple', 'banana', 'clementine', 'dragonfruit', 'b1']}
        />
        <form>
          <label>
            Initial Count:
            <input type="number" ref={node => (this.inputNode = node)} />
          </label>
          <button onClick={this.handleUpdate} type="button">
            Submit
          </button>
        </form>
        <br />
        <Counter initialCount={this.state.initialCount} />
      </div>
    )
  }
}
export default App
