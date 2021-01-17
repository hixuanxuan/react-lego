import lazyLoader from '@utils/lazyLoader';

export const Demo = () => lazyLoader(import(/* webpackChunkName: 'demo' */ './demo'));
export const Demo2 = () => lazyLoader(import(/* webpackChunkName: 'demo2' */ './demo2'));
