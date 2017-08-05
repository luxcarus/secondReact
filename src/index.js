import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import setStars from './store/reducers/setStars';

import {Router, Route, Switch} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

import Home from './containers/home'
import Login from './containers/login'

const history = createBrowserHistory()
const store = createStore(setStars);

const render = () => {
    ReactDOM.render(
        <Provider store = {store}>
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/home' component={Home}/>
                    <Route path='/login' component={Login}/>
                </Switch>
            </Router>
        </Provider>,
        document.getElementById('root')
    );
};
store.subscribe(render);
render();
registerServiceWorker();