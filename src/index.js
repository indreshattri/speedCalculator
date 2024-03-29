import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux';
import App from './App';
import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker';

const initialState = {
	speed: '',
	distance: '',
  time: '',
  isTimeValid: true,
  isDistanceValid: true,
  headerText: 'Speed Calculator',
  lastFiveCalc: []
}

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const store = createStore(rootReducer,initialState,enhancers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
