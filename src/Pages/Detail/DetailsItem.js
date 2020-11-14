import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailsItem extends Component {
  render() {
    return <div>{this.props.item.name}</div>;
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(DetailsItem);
