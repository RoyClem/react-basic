import React from "react";
import { connect } from 'react-redux';
import "./index.css";
import {increment, decrement, reset} from './actions'

class Counter extends React.Component {
    
  increment = () => {
    // we can call the `increment` prop,
    // and it will dispatch the action
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };
    
  reset = () => {
    this.props.reset();
  };
    
  render() {
      console.log("count:", this.props)
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <button className='reset' onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log("state:", state.counterReducer.count);
  return {  
    count: state.counterReducer.count
  };
}

// in this object, keys become prop names,
// and values should be action creator functions.
// They get bound to `dispatch`.
const mapDispatchToProps = {
    increment,
    decrement,
    reset
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Counter);