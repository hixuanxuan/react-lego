import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { LazyWrapper } from './components';
import { Routers, RouterItem } from './router';

const renderDefaultLayout = (config: RouterItem) => {
    const {
        showLayout,
        showLoading,
        Component,
        // name
    } = config;
    let Content;
    if (typeof Component === 'function') {
        Content = Component();
    } else {
        Content = Component;
    }
    return (
        <>
            {/* {showLayout ? <Header /> : null} */}
            <LazyWrapper showLoading={showLoading}>
                <Content />
            </LazyWrapper>
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

export default () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
