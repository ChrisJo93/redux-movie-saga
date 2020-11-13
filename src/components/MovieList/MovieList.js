import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';

class MovieList extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_MOVIES' });
  }

  render() {
    return (
      <div>
        <div>
          {this.props.store.movies.map((movieItem, index) => {
            return <MovieItem key={index} movieItem={movieItem} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(MovieList);
