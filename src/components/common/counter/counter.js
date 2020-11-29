import React from 'react';

export default class Counter extends React.Component { 

    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {
          count: 0
        }
    }
    
    clickMe = () => {
        console.log("click");
        this.setState((state) => {
          return {count: state.count + 1}
        })
    }
  
    componentDidMount() {
      console.log("mounted");
    }
  
    componentDidUpdate() {
      console.log("update");
    }
  
    
    render() {
        const box = 
          <div>
            <p>Counter: {this.state.count}</p>
            <button onClick={this.clickMe}>Click Me!</button>
          </div>;
  
        return box;
      }
    }