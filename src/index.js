import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension'
import Reducer from '../src/reducer/reducer';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';


// the store is connected to the reducer file and the initial state
const store = createStore(
    Reducer
);


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);



// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
