import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import appReducer from './Reducer';
import { reducer as formReducer } from 'redux-form';
import './bulma.css';
import './app.css';

let store = createStore(combineReducers({
    appReducer,
    form : formReducer
    }
));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
