import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class DetailsPage extends Component {
  render() {
    return (
      <div>
        <div>{this.props.store.selectedMovieReducer.title}</div>
        <div>
          <img src={this.props.store.selectedMovieReducer.poster} />
        </div>
        <div>{this.props.store.selectedMovieReducer.description}</div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withRouter(connect(mapStoreToProps)(DetailsPage));
