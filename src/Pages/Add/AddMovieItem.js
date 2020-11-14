import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovieItem extends Component {
  render() {
    return (
      <div>
        <div>{this.props.item.title}</div>
        <img src={this.props.item.poster} />
        <div> {this.props.item.description}</div>
        <div> {this.props.item.genre}</div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(AddMovieItem);
