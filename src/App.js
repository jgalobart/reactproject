import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ItemsList from './components/shopcart/list/list.js'

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}

function ShopCart() {
  return (
    <div>
      <ItemsList />
    </div>
  )
}

function Home() {
  return <h2>Home</h2>
}

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
      <Link to="/shopcart">Shopcart</Link>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/shopcart">
          <ShopCart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

  )
  
}

export default App;
