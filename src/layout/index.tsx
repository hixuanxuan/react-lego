import React from 'react';
import { Fragment } from 'react';
import Header from './header';
// export { default as Aside } from './aside';

interface Layout {
    children: React.ReactNode;
}

export default function Layout({ children }: Layout) {
    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>
    );
}
