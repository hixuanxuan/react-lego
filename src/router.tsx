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
    showHeader?: boolean; // 默认是true
}

const isClient = process.env.IS_CLIENT === 'true';

export const Routers: RouterItem[] = isClient ? [
    {
        name: 'client',
        path: '/client/:projectId/:pageId',
        Component: Pages.client,
        showLayout: false,
    },
] : [
    {
        name: 'demo',
        path: '/demo/:tabs',
        Component: Pages.Demo,
        showLayout: true,
    },
    {
        name: 'editContent',
        path: '/edit/:pro/:uid',
        Component: Pages.EditContent,
        showLayout: true,
    },
    {
        name: 'login',
        path: '/login',
        Component: Pages.Login,
        showLayout: false,
        showHeader: false,
    },
    {
        name: 'addproject',
        path: '/addproject',
        Component: Pages.addProject,
        showLayout: true,
        showHeader: true,
    },
    {
        name: 'manage',
        path: '/manage',
        Component: Pages.iframe,
        showLayout: false,
        showHeader: false,
    },
    // {
    //     name: 'edit',
    //     path: '/',
    //     Component: Pages.EditContent,
    //     showLayout: true,
    // }
];
