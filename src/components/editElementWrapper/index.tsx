import React from 'react';
import { Resizable } from 're-resizable';
import { usePage } from '@hooks';
import { useInitElement } from './hooks';
import useEditState, { useEditStateProvider } from './hooks/useEditState';
import css from './index.module.less';

interface Props {
    children: React.ReactNode;
    id: string;
}
// const store = {};
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
