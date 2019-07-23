import ListingsView from './ListingsView'
import '../src/sass/_reset.scss';
import '../src/sass/main.scss';
import React from 'react';
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch 
} from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';

const App = () => {
  return (
    <Router >
      <Route exact path="/" component={Home} />
      <Route exact path="/Listings" component={ListingsView} />
      <Route exact path="/SignIn" component={SignIn} />
    </Router>
  );
};

export default App;
