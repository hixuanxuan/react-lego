import React from 'react';
import { Fragment, useEffect } from 'react';
import Header from './header';
import getStatus from '@utils/getStatus';
// export { default as Aside } from './aside';

interface Layout {
    children: React.ReactNode;
}

export default function Layout({ children }: Layout) {
    useEffect(() => {
        getStatus();
    }, []);
    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>
    );
}
