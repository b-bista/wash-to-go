import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import HomePage from './pages/HomePage/HomePage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AccountPage';
import PostsListPage from './pages/PostsListPage';
import PreviousOrdersPage from './pages/PreviousOrdersPage';
import OrdersPage from './pages/OrdersPage';
import OrderPage from './pages/OrderPage';
import './App.css';
import AccountPage from './pages/AccountPage';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">WashToGo</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/home">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/stores">
            Order
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/edit-account">
            Edit Account Info
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/previous-orders">
            Previous Orders
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
        <Router>
          <Navigation />
          <div className="container-fluid">
            <div className="row justify-content-center">
              <Switch>
                <Route path='/ordered' component={Ordered} />
                <Route path='/orders' component={OrderPage} />
                <Route path='/summary' component={OrderSummary} />
                <Route path="/stores" component={OrdersPage} />
                <Route path="/home" component={HomePage} />
                <Route path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/edit-account" component={AccountPage} />
                <Route path="/previous-orders" component={PreviousOrdersPage} />
                <Route path="/" component={LandingPage} />
                
                
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
