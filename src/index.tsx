import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import undoable from 'redux-undo';
import { getReducers } from '@utils';
import rootReducer from './globalReducer';
import Layout from './layout';
import './index.less';
import '@css/base.less';
import 'antd/dist/antd.less';

console.log(Layout);
const isClient = process.env.IS_CLIENT === 'true';

const paths: string[] = ['layout/header/', !isClient && 'pages/editContent/', isClient && 'pages/client/'].filter(Boolean);

const store = createStore(
    combineReducers({
        global: undoable(rootReducer),
        ...getReducers(paths),
    }),
    {},
);

ReactDOM.render(
    <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
            <Layout />
        </DndProvider>
    </Provider>,
    document.getElementById('root'),
);
