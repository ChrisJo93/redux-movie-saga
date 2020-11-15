import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import AddMoviePage from '../../Pages/Add/AddMoviePage';
import DetailsPage from '../../Pages/Detail/DetailsPage';
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
            <Button>
              <Link to="/">Home</Link> {/* shows full list of movies*/}
            </Button>
            <Button>
              <Link to="/details">Movie Details</Link>{' '}
              {/* has button to return to home */}
            </Button>
            <Button>
              <Link to="/add">Add Movie</Link>{' '}
              {/*save and cancel button back to home*/}
            </Button>
          </nav>
          <br />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/details" component={DetailsPage} />
          <Route exact path="/add" component={AddMoviePage} />
        </Router>
      </div>
    );
  }
}

export default App;
