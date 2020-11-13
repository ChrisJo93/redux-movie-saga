import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from '../../Pages/Home/HomePage';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <nav>
            <button>
              <Link to="/">Home</Link> {/* shows full list of movies*/}
            </button>
            <button>
              <Link to="/details">Movie Details</Link>{' '}
              {/* has button to return to home */}
            </button>
            <button>
              <Link to="add">Add Movie</Link>{' '}
              {/*save and cancel button back to home*/}
            </button>
          </nav>
          <br />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/details" component={''} />
          <Route exact path="/add" component={''} />
        </Router>
      </div>
    );
  }
}

export default App;
