import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Routers, RouterItem } from './router';
import Header from '@layout/header';
import { LazyWrapper } from '@components';
import { SelfReducerProvider } from '@hooks/useSelfReducer';
// const { mod, id } = process.env;
const renderDefaultLayout = (config: RouterItem) => {
    const { showLayout, showLoading, Component, name } = config;
    let Content;
    if (typeof Component === 'function') {
        Content = Component();
    } else {
        Content = Component;
    }
    return (
        <>
            {/* {showLayout ? <Header /> : null} */}
            <SelfReducerProvider value={'layout/header/'}>
                <Header />
            </SelfReducerProvider>
            <SelfReducerProvider value={`pages/${name}/`}>
                <LazyWrapper showLoading={showLoading}>
                    <Content />
                </LazyWrapper>
            </SelfReducerProvider>
        </>
    );
};

const App: React.FC<{}> = (props) => {
    useEffect(() => {
        console.log('init success', props);
    }, []);
    return (
        <Switch>
            {Routers.map((item) => (
                <Route
                    key={item.path}
                    exact={item.exact ? item.exact : true} // 模糊匹配
                    path={item.path}
                    render={() => renderDefaultLayout(item)}
                />
            ))}
            <Route render={() => 'no match'} />
        </Switch>
    );
};
//     {/* // <BrowserRouter basename={`/preview/${id}`}>
// //     <Route />
// // </BrowserRouter> */}
export default () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
