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
interface ResizeableWrapperProps {
    children: any;
    open: boolean;
    [props: string]: Resizable;
}
// const store = {};
const ResizeableWrapper = ({
    children,
    open,
    ...props
}: ResizeableWrapperProps) => {
    if (open) {
        return <Resizable {...props}>{children}</Resizable>;
    }
    return children;
};
export default function EditElementWrapper({ children, id }: Props) {
    const page = usePage();
    const conf = { page, id };
    useInitElement(conf);
    const [Provider, useEditStateDefault] = useEditStateProvider(conf);
    const [{ width, height }, updater] = useEditStateDefault();
    return (
        <Provider value={useEditStateDefault}>
            <ResizeableWrapper
                open={true}
                className={css.resizable}
                size={{ width, height }}
                onResizeStop={(_, direction, ref, d) => {
                    updater({
                        width: width + d.width,
                        height: height + d.height,
                    });
                }}
            >
                {children}
            </ResizeableWrapper>
        </Provider>
    );
}
export { useEditState };
