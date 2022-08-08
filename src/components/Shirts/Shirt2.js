import React from 'react';
import Select from './selector'
import Size from './shirtsize'

export default class Shirt1 extends React.Component {  
  state = {
    count: 0
  };
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return(
    <div>
        <img
          height={200}
          src="https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Shirt"
          ></img>
          <h3>Price Rs 399/-</h3>
          <p>Free Delivery</p>
          <div>
            <Select>
              <Size/>
            </Select></div>
          <div><button onClick={this.increment}>Add to Cart</button></div>
          <div><button onClick={this.decrement}>Remove from Cart</button></div>
          <div>Count : {this.state.count}</div>
    </div>
    );
  }
}

