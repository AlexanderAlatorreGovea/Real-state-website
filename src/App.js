import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import WOW from "wowjs";


import ListingsView from "./ListingsView";
import AboutUs from "./AboutUs";
import Home from "./Home";
import SignIn from "./SignIn";
import ScrollToTop from "./ScrollToTop";

import "../src/sass/_reset.scss";
import "../src/sass/main.scss";

class App extends React.Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Listings" component={ListingsView} />
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/AboutUs" component={AboutUs} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
