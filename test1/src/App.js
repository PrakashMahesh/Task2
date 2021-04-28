import React,{Component} from 'react';
import './App.css';
import {Route,NavLink,BrowserRouter as Router} from "react-router-dom";
import Home from './Components/HomeComponent';
import Contact from './Components/ContentComponent'
import {Provider} from 'react-redux'
import CakeShop from './Components/reduxexample';
import Store from './Redux/Store'
import Footer from './Components/Footer/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={Store}>
            <CakeShop></CakeShop>
        </Provider>
        <div>
          
          <ul className="header">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/home" component={Home}/>
            <Route path="/contact" component={Contact}/>
          </div>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
