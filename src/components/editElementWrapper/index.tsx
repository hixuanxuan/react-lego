import React from 'react';
import { Resizable } from 're-resizable';
import { useDrag, DragSourceMonitor } from 'react-dnd';
import { usePage } from '@hooks';
import { useInitElement } from './hooks';
import useEditState, { useEditStateProvider } from './hooks/useEditState';
import css from './index.module.less';

interface Props {
    children: React.ReactNode;
    id: string;
}
interface ResizeableWrapperProps {
    children: any;
    open: boolean;
    [props: string]: Resizable;
}
// const store = {};
const funcs = {
    begin: (mintor: DragSourceMonitor) => console.log('begin', mintor),
    end: (item: any, mintor: DragSourceMonitor) =>
        console.log('end', item, mintor),
};
const box = {
    type: 'card',
};

export default function EditElementWrapper({ children, id }: Props) {
    const page = usePage();
    const conf = { page, id };
    useInitElement(conf);
    const [Provider, useEditStateDefault] = useEditStateProvider(conf);
    const [{ width, height }, updater] = useEditStateDefault();
    return (
        <Provider value={useEditStateDefault}>
            <Resizable
                className={css.resizable}
                size={{ width, height }}
                onResizeStop={(e, direction, ref, d) => {
                    updater({
                        width: width + d.width,
                        height: height + d.height,
                    });
                }}
            >
                {children}
            </Resizable>
        </Provider>
    );
}
export { useEditState };
