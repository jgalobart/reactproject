import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ItemsList from './components/shopcart/list/list.js';

import About from './components/common/about/about.js';

function Users() {
  return <h2>Users</h2>
}

function Home() {
  return <h2>Home</h2>
}

function App() {
  return (
    
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/shopcart">Shopcart</Link></li>
        </ul>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/shopcart">
            <ItemsList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    

  )
  
}

export default App;
