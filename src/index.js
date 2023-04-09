import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import journeyReducer from './slice/journeySlice';
import RequestJourney from './components/RequestJourney';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore({
  reducer: {
    journey: journeyReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <RequestJourney />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
