import { FC } from 'react';
// import {ReactNode} from 'react';
import * as Pages from './pages';

export interface RouterItem {
    name: string;
    path: string;
    Component: () => FC | FC;
    showLoading?: boolean;
    showLayout?: boolean;
    exact?: boolean;
}

export const Routers: RouterItem[] = [
    {
        name: 'demo',
        path: '/demo/:tabs',
        Component: Pages.Demo,
        showLayout: true,
    },
    {
        name: 'editContent',
        path: '/',
        Component: Pages.EditContent,
        showLayout: true,
    },
    // {
    //     name: 'edit',
    //     path: '/',
    //     Component: Pages.EditContent,
    //     showLayout: true,
    // }
];
