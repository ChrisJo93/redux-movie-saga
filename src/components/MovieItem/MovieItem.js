import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MovieItem extends Component {
  toDetails = (event) => {
    this.props.dispatch({
      type: 'SELECT_MOVIES',
      payload: this.props.movieItem,
    });
    this.props.history.push('/details');
  };

  render() {
    return (
      <div>
        <div>
          <img src={this.props.movieItem.poster} onClick={this.toDetails} />
        </div>
        <div>{this.props.movieItem.title}</div>
        <div>{this.props.movieItem.description}</div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default withRouter(connect(mapStoreToProps)(MovieItem));
