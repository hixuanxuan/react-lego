import React from 'react';
import { ActionCreators } from 'redux-undo';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const App: React.FC<{}> = () => {
    const state = useSelector(
        (store: any) => store.global.present.toJS(),
    );
    const dispatch = useDispatch();
    return (
        <>
            <div className="aaa">{state.a}</div>
            <button
                type="button"
                onClick={
                    () => {
                        dispatch({
                            type: 'add',
                        });
                    }
                }
            >
                click
            </button>
            <button
                type="button"
                onClick={
                    () => {
                        dispatch(ActionCreators.undo());
                    }
                }
            >
                undo
            </button>
            <Link to="/demo2">link</Link>
        </>
    );
};

export default App;
