import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 0
  }

  increaseCount = () => {
    const {count} = this.state
    this.setState({
      count: count + 1
    })
  } 
  decreaseCount = () => {
    const {count} = this.state
    this.setState({
      count: count - 1
    })
  } 
  render() {
    const btnWidth = {
      width: "50px",
      fontSize: "25px",
      borderRadius: "10px",
      display: "flex align-itmes-center",
    }

    const containerStyle = {
      marginLeft: "420px"
    }

    const {count} = this.state

    return (
      <div className='container d-flex gap-2 align-items-center justify-content-center' style={containerStyle}>
        <button onClick={this.increaseCount} className='btn btn-primary' style={btnWidth}>+</button>
        <p className='fs-3'>{count}</p>
        <button onClick={this.decreaseCount} className='btn btn-primary' style={btnWidth}>−</button>
      </div>
    )
  }
}
