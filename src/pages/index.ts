import lazyLoader from '@utils/lazyLoader';

export const Demo = () =>
    lazyLoader(import(/* webpackChunkName: 'demo' */ './demo'));
export const EditContent = () =>
    lazyLoader(import(/* webpackChunkName: 'editContent' */ './editContent'));
export const Login = () =>
    lazyLoader(import(/* webpackChunkName: 'login' */ './login'));
export const addProject = () =>
    lazyLoader(import(/* webpackChunkName: 'addproject' */ './addProject'));
export const client = () =>
    lazyLoader(import(/* webpackChunkName: 'addproject' */ './client'));