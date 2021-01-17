import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import undoable from 'redux-undo';
import { getReducers } from '@utils';
import rootReducer from './globalReducer';
import Layout from './layout';
import './index.less';
import '@css/base.less';

const paths: string[] = ['layout/header/'];

const store = createStore(
    combineReducers({
        global: undoable(rootReducer),
        ...getReducers(paths),
    }),
    {},
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
