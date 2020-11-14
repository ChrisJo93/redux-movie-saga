import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddMovieItem from './AddMovieItem';

class AddMoviePage extends Component {
  //need to capture state to send it to reducer
  state = {
    newMovie: {
      title: '',
      poster: '',
      description: '',
      genre: '',
    },
  };

  cancel = (event) => {
    this.props.history.push('/');
  };

  save = (event) => {
    console.log('it do be savin');
    this.props.dispatch({ type: 'NEW_MOVIE', payload: this.state.newMovie });
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="Movie Title" name="title" />
        <input type="text" placeholder="Poster" name="Poster URL" />
        <input type="text" placeholder="Description" name="Description" />
        <input type="dropdown" placeholder="Genres" name="Genres" />
        <div>
          {this.props.store.newMovieReducer.map((item, index) => {
            return <AddMovieItem key={index} item={item} />;
          })}
        </div>
        <div>
          <button onClick={this.cancel}>Cancel</button>
          <button onClick={this.save}>Save</button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withRouter(connect(mapStoreToProps)(AddMoviePage));
