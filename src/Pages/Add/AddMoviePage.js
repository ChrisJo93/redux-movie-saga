import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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

  cancel = (event) => {
    this.props.history.push('/');
  };

  save = (event) => {
    console.log('it do be savin');
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
        <input
          type="dropdown"
          placeholder="Genres"
          name="Genres"
          onChange={(event) => this.handleInput(event, 'genre')}
        />
        <div>
          {/* {this.props.store.newMovieReducer.map((item, index) => {
            return <AddMovieItem key={index} item={item} />;
          })} */}
          <div>{this.props.store.newMovieReducer.title}</div>
          <div>{this.props.store.newMovieReducer.poster}</div>
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
