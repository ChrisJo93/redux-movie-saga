import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class AddMoviePage extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Movie Title" name="title" />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withRouter(connect(mapStoreToProps)(AddMoviePage));
