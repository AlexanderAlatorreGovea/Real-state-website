import ListingsView from './ListingsView'
import '../src/sass/_reset.scss';
import '../src/sass/main.scss';
import React from 'react';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <Router >
      <ScrollToTop>
        <Route exact path="/" component={Home} />
        <Route exact path="/Listings" component={ListingsView} />
        <Route exact path="/SignIn" component={SignIn} />
      </ScrollToTop>
    </Router>
  );
};

export default App;
