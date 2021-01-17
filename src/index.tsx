import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import undoable from 'redux-undo';
import { getReducers } from '@utils';
import rootReducer from './globalReducer';
import App from './pages/App';
import './index.less';
import '@css/base.less';

const paths: string[] = ['layout/header/'];
console.log({
    global: undoable(rootReducer),
    ...getReducers(paths),
});
// console.log(111);
const store = createStore(
    combineReducers({
        global: undoable(rootReducer),
        ...getReducers(paths),
    }),
    {},
);
// console.log(('------------------------>', module as any).hot);
// if ((module as any).hot) {
//     (module as any).hot.accept(
//         './index.tsx',
//         () => {
//             console.log('Accepting the updated printMe module!');
//         },
//     );
//     // 关闭指定子模块的HMR
//     // module.hot.decline('./extra.js')
// }

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
