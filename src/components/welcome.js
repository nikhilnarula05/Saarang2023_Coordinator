import React from 'react';
import Select from './Shirts/selector'
import Size from './Shirts/shirtsize'
//import Shirt1 from './Shirts/Shirt1'
import Shirt2 from './Shirts/Shirt2'
function Header() {
  document.querySelector('.form-body').style.display = 'none'
  document.querySelector('.footer').style.display = 'none'
  document.querySelector('.header').style.display = 'none'
  class Shirt1 extends React.Component {  
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
  
  











    return(
          <div className="welcomePage">
          <h1>
            Hiii !
          </h1>
          <center>
          <Shirt1/>
          <Shirt2/>
          </center>
          </div>
    )
}
export default Header;

