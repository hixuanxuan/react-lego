import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import undoable from 'redux-undo';
import { getReducers } from '@utils';
import rootReducer from './globalReducer';
import Layout from './layout';
import './index.less';
import '@css/base.less';

console.log(Layout);
const paths: string[] = ['layout/header/', 'pages/editContent/'];

const store = createStore(
    combineReducers({
        global: undoable(rootReducer),
        ...getReducers(paths),
    }),
    {},
);

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>,
    document.getElementById('root'),
);
