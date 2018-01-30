import React, { Component } from 'react';
import Header from './components/Header.js';
import Content from './components/Content.js';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer.js';
import { BrowerRouter as Router, Route } from 'react-router-dom'
import './stylesheets/App.css';

class App extends Component {
  constructor(props){
    super(props)

      this.state = {
        apiUrl: "http://localhost:3000",
        pages: [],
        newPageSuccess: false,
        errors: null
      }
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
            <div className="main-container">
              <Sidebar />
              <Content />

            </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
