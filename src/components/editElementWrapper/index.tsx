import React, { useState } from 'react';
import { Resizable, Enable } from 're-resizable';
import { useDrag, DragSourceMonitor } from 'react-dnd';
import { usePage } from '@hooks';
import cn from 'classnames';
import { useInitElement } from './hooks';
import useEditState, { useEditStateProvider } from './hooks/useEditState';
import css from './index.module.less';

interface Props {
    children: React.ReactNode;
    id: string;
    isEdit?: boolean;
    defaultProps?: React.CSSProperties;
    noBorder?: boolean;
    needResize?: boolean;
    enable?: Enable;
}
// interface ResizeableWrapperProps {
//     children: any;
//     open: boolean;
//     [props: string]: Resizable;
// }
// const store = {};
const funcs = {
    begin: (mintor: DragSourceMonitor) => console.log('begin', mintor),
    end: (item: any, mintor: DragSourceMonitor) =>
        console.log('end', item, mintor),
};
const box = {
    type: 'card',
};
export default function EditElementWrapper({
    children,
    id,
    defaultProps,
    needResize,
    noBorder,
    enable,
    isEdit = true,
}: Props) {
    const [resizing, onResize] = useState(false);
    const page = usePage();
    const conf = { page, id };
    useInitElement(conf, defaultProps);
    const [Provider, useEditStateDefault] = useEditStateProvider(conf);
    const [{ width, height, ...style }, updater] = useEditStateDefault();
    return isEdit ? (
        <div style={style}>
            <Provider value={useEditStateDefault}>
                {enable || needResize ? (
                    <Resizable
                        className={cn(
                            css.resizable,
                            { [css.noBorder]: noBorder },
                            { [css.resizing]: resizing },
                        )}
                        size={{ width, height }}
                        onResize={(e) => {
                            console.log('resizing');
                            e.preventDefault();
                            onResize(true);
                        }}
                        enable={enable}
                        onResizeStop={(e, direction, ref, d) => {
                            onResize(false);
                            updater({
                                width: width + d.width,
                                height: height + d.height,
                            });
                        }}
                    >
                        {React.cloneElement(children, { id })}
                    </Resizable>
                ) : (
                    React.cloneElement(children, { id })
                )}
            </Provider>
        </div>
    ) : (
        <div
            style={{
                ...style,
                ...(enable || needResize ? { width, height } : {}),
            }}
        >
            <Provider value={useEditStateDefault}>
                {React.cloneElement(children, { id })}
            </Provider>
        </div>
    );
}
export { useEditState };
