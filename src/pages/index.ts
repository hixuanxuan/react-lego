import lazyLoader from '@utils/lazyLoader';

export const Demo = () =>
    lazyLoader(import(/* webpackChunkName: 'demo' */ './demo'));
export const EditContent = () =>
    lazyLoader(import(/* webpackChunkName: 'editContent' */ './editContent'));
