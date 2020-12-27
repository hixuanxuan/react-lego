/**
 * 按需加载组件
 * @props {Component} component
 * @props {Component} fallback 可以是纯函数组件
 * @return {Component}
 */

import React, { Suspense, cloneElement, ReactElement } from 'react';
import { Spin as Loading } from 'antd';

export interface Props {
    children: ReactElement;
    showLoading: boolean;
}

const LazyWrapper: React.FC<Props> = (props: Props) => {
    const { children, showLoading = true } = props;
    return (
        <Suspense fallback={showLoading ? <Loading /> : ''}>
            {cloneElement(children)}
        </Suspense>
    );
};

export default LazyWrapper;
