import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider  } from 'react-redux';
// import listApp from './store/reducers';

// import 'materialize-css'

const store = createStore();


const render = () => {
    ReactDOM.render(
        <Provider store = { store }>
        </Provider>,
        document.getElementById('root')
    );
};
store.subscribe(render);
render();
registerServiceWorker();