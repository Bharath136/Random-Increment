import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {num: 0}

  onIncrease = () => {
    this.setState(prevState => ({
      num: prevState.num + Math.floor(Math.random() * 100),
    }))
  }

  render() {
    const {num} = this.state
    const count = num % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Count {num}</h1>
          <p className="description">Count is {count}</p>
          <button type="button" className="button" onClick={this.onIncrease}>
            Increment
          </button>
          <p className="description2">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
