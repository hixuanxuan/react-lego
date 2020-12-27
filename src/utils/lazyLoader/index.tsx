/**
 * @file lazyLoader
 * @Description lazy容器
 */

import { lazy } from 'react';

const lazyLoader = (mod: any) => {
    // if (!name) {
    // }
    const content = mod.default || mod;

    // 判断是否是promise对象
    if (
        content
        && (typeof content === 'object' || typeof content === 'function')
        && typeof content.then === 'function'
    ) {
        return lazy(
            () => content,
        );
    }

    return content;
};

export default lazyLoader;
