import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './movieitem.css';

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
      <div className="movieItem">
        {/* <div>
          <img src={this.props.movieItem.poster} onClick={this.toDetails} />
        </div>
        <div>{this.props.movieItem.title}</div>
        <div>{this.props.movieItem.description}</div> */}
        <Card className="root">
          <CardActionArea>
            <CardMedia
              className="media"
              image={this.props.movieItem.poster}
              onClick={this.toDetails}
              title={this.props.movieItem.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.movieItem.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.movieItem.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default withRouter(connect(mapStoreToProps)(MovieItem));
