// import undoable from 'redux-undo';
// import { combineReducers } from 'redux';

interface Reducers {
    [path: string]: any
}

export default (paths: string[]) => {
    const reducers: Reducers = {};
    paths.forEach(
        (path: string) => {
            const reducer = require(`@/${path}reducer`);
            reducers[path] = reducer.default || reducer;
        },
    );
    return reducers;
};
