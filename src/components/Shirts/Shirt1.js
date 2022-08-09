import React from 'react';
import Select from './selector'
import Size from './shirtsize'

export default class Shirt1 extends React.Component {  
  state = {
    count1: 0,
  };
  increment = () => {
    this.setState({
      count1: this.state.count1 + 1
    });
  };

  decrement = () => {
    this.setState({
      count1: this.state.count1 - 1
    });
  };

  render() {
    return(
    <div>
        <img
          height={200}
          src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=600"
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
          <div>Count : {this.state.count1}</div>
    </div>
    );
  }
}
