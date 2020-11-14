import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DetailsItem from './DetailsItem';

class DetailsPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_GENRES',
      payload: this.props.store.selectedMovieReducer.id,
    });
  }

  render() {
    return (
      <div>
        <div>{this.props.store.selectedMovieReducer.title}</div>
        <div>
          <img src={this.props.store.selectedMovieReducer.poster} />
        </div>
        <div>{this.props.store.selectedMovieReducer.description}</div>
        <br />
        <div>
          {this.props.store.genres.map((item, key) => (
            <DetailsItem key={key} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withRouter(connect(mapStoreToProps)(DetailsPage));
