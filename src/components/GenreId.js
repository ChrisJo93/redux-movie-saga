import React, { Component } from 'react';
import { connect } from 'react-redux';

class GenreId extends Component {
  render() {
    return <option value={this.props.id}>{this.props.genre}</option>;
  }
}
const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(GenreId);
