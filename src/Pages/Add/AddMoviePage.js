import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GenreId from '../../components/GenreId';

class AddMoviePage extends Component {
  // creating new movie to send to new movie reducer
  state = {
    newMovie: {
      title: '',
      poster: '',
      description: '',
      genre: '',
    },
  };

  componentDidMount() {
    this.props.dispatch({ type: 'GET_ALL_GENRES' });
  }

  cancel = (event) => {
    this.props.history.push('/');
  };

  save = (event) => {
    //send back to homepage
    this.props.dispatch({ type: 'NEW_MOVIE', payload: this.state.newMovie });
  };

  handleInput = (event, fieldKey) => {
    //single function to handle all input field changes
    this.setState({
      newMovie: {
        ...this.state.newMovie,
        [fieldKey]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Movie Title"
          name="title"
          onChange={(event) => this.handleInput(event, 'title')}
        />
        <input
          type="text"
          placeholder="Poster"
          name="Poster URL"
          onChange={(event) => this.handleInput(event, 'poster')}
        />
        <input
          type="text"
          placeholder="Description"
          name="Description"
          onChange={(event) => this.handleInput(event, 'description')}
        />
        <label>Choose a Genre</label>
        {/* looping through genres. Populating dropdown menu. */}
        <select
          name="genres"
          id="genres"
          onChange={(event) => this.handleInput(event, 'genre_id')}
        >
          {this.props.store.genres.map((item, index) => (
            <GenreId key={index} genre={item.name} id={item.id} />
          ))}
        </select>
        <div>
          {/* displaying results of inputs */}
          <div>{this.props.store.newMovieReducer.title}</div>
          <div>
            <img src={this.props.store.newMovieReducer.poster} />
          </div>
          <div>{this.props.store.newMovieReducer.description}</div>
          <div>{this.props.store.newMovieReducer.genre}</div>
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
