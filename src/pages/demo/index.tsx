/* eslint-disable */
import React from 'react';
import { ActionCreators } from 'redux-undo';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isConstructorDeclaration } from 'typescript';

// function log(target, name, descriptor) {
//     var oldValue = descriptor.value;
//     console.log('log', target, name,);
//     descriptor.value = function() {
//       console.log(`Calling ${name} with`, arguments);
//       return oldValue.apply(this, arguments);
//     };
  
//     return descriptor;
//   }
// const demo = {
//     @test
//     log: function() {
//         console.log('log');
//     }
// };

function log<T extends {new (...args: any[]): any}>(constructor : any) {
    class Log extends constructor {
        constructor(...args: any[]){
            super();
            console.log(args);
        }
    }
    return Log;
}
@log
class A {
    constructor() {
        console.log('a');
    }
}
const a = new A();
// const a = {
//     @log
//     a: function () {

//     }
// }
console.log(a);
// const a = {
//     @log
//     a: () => {
//         console.log('aaa');
//     }
// }
// window.a = a ;
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
