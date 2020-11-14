import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class DetailsPage extends Component {
  componentDidMount() {}

  selectedMovie = () => {
    this.props.dispatch({ type: 'SELECT_MOVIES' });
  };

  render() {
    return (
      <div>{this.props.store.selectedMovieReducer}I still do something too</div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withRouter(connect(mapStoreToProps)(DetailsPage));
