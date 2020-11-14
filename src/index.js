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
}

function* getMovieSaga(action) {
  try {
    yield put({ type: 'ERROR_RESET' });
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
    yield put({ type: 'ERROR_RESET' });
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
