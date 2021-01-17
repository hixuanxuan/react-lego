import { FC } from 'react';
// import {ReactNode} from 'react';
import * as Pages from './pages';

export interface RouterItem {
    path: string;
    Component: () => FC | FC;
    showLoading?: boolean;
    showLayout?: boolean;
    exact?: boolean;
}

export const Routers: RouterItem[] = [
    {
        path: '/demo/:tabs',
        Component: Pages.Demo,
        showLayout: true,
    },
    {
        path: '/',
        Component: Pages.Demo2,
        showLayout: true,
    },
];
