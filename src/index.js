import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeLatest('GET_MOVIES', getMovieSaga);
  yield takeLatest('GET_GENRES', getGenreSaga);
  yield takeLatest('GET_ALL_GENRES', getAllGenreSaga);
  yield takeLatest('NEW_MOVIE', postNewMovieSaga);
}

function* postNewMovieSaga(action) {
  try {
    yield axios.post('/api/movie', action.payload);
    yield put({ type: 'GET_MOVIES' });
  } catch (err) {
    console.log('ERROR POSTING MOVIE:', action.payload);
  }
}

function* getMovieSaga(action) {
  try {
    const response = yield axios.get('/api/movie');
    yield put({
      type: 'SET_MOVIES',
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: 'ERROR_MSG',
      payload: 'There was a problem in GET MOVIE SAGA',
    });
  }
}

function* getGenreSaga(action) {
  try {
    const response = yield axios.get(`/api/genre/${action.payload}`);
    yield put({
      type: 'SET_GENRES',
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: 'ERROR_MSG',
      payload: 'There is a problem in get genre',
    });
  }
}

function* getAllGenreSaga(action) {
  try {
    const response = yield axios.get(`/api/genre/`);
    yield put({ type: 'SET_GENRES', payload: response.data });
  } catch (err) {
    console.log(err);
    yield put({ type: 'ERROR_MSG', payload: 'THERE BE A FUCK UP' });
  }
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Reducers
const selectedMovieReducer = (state = [], action) => {
  //stores only selected movie to send to details
  switch (action.type) {
    case 'SELECT_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

const newMovieReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_MOVIE':
      return action.payload;
    default:
      return state;
  }
};

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    selectedMovieReducer,
    newMovieReducer,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
