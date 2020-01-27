import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReviewList from './ReviewList';
import About from './About';
import Contact from './Contact';


{/*this page is responsible for routing urls to the respective pages you create. example: /about gets you to the about page..

//TODO: 
          //<Route path='/contact' exact={true} component={contact}/> 
          //<Route path='/mailinglist' exact={true} component={mailinglist}/> 
          //<Route path='/buynow' exact={true} component={buynow}/> 

*/}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/reviews' exact={true} component={ReviewList}/>
          <Route path='/contact' exact={true} component={Contact}/> 
          <Route path='/about' exact={true} component={About}/> 

        </Switch>
      </Router>
    )
  }
}

export default App;