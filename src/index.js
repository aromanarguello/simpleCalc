import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from '../src/reducer/reducer';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    Reducer,
    // window.devToolsExtension && window.devToolsExtension()
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
