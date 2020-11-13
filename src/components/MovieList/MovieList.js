import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_MOVIES' });
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.store.movies.map((item, index) => {
            return <li index={item.id} item={item.poster} />;
          })}
        </ul>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(MovieList);
