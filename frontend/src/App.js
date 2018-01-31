import React, { Component } from 'react';
import Header from './components/Header.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './stylesheets/App.css';

class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Header />
            <div className="main-container">
              <Switch>
                <Route exact path="/pages/" component={Content} />
              </Switch>
            </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
