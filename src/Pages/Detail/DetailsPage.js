import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DetailsItem from '../../components/DetailsItem/DetailsItem';
import './details.css';

class DetailsPage extends Component {
  componentDidMount() {
    //fetching genre type for specific movie
    this.props.dispatch({
      type: 'GET_GENRES',
      payload: this.props.store.selectedMovieReducer.id,
    });
  }

  return = (event) => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        {/* <div>{this.props.store.selectedMovieReducer.title}</div>
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
        <br /> */}
        <div>
          <Button onClick={this.return}>Return to Movie List</Button>
        </div>
        <div className="rootDetail mediaDetail">
          <Card>
            <CardActionArea>
              <CardMedia
                className="mediaDetail"
                image={this.props.store.selectedMovieReducer.poster}
                title={this.props.store.selectedMovieReducer.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.store.selectedMovieReducer.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {this.props.store.selectedMovieReducer.description}
                  <br />
                  <span className="genreText">Genres:</span>
                  {this.props.store.genres.map((item, key) => (
                    <DetailsItem key={key} item={item} />
                  ))}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withRouter(connect(mapStoreToProps)(DetailsPage));
