import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

class Box extends React.Component { 

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

ReactDOM.render(
  <React.StrictMode>
    <Box />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
