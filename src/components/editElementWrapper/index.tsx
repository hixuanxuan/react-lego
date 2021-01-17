import React, { createContext } from 'react';
import { useSelector } from 'react-redux';
import { Resizable } from 're-resizable';
// import { usePage } from '@hooks';
import css from './index.module.less';

export interface Props {
    children: React.ReactNode;
    id: string;
}
// const store = {};
const EditElementContext = createContext({});
export default function editElementWrapper({ children }: Props) {
    // const page = usePage();
    const data = useSelector(
        (store: any) => store,
    );
    console.log('data, data', data);
    // const
    return (
        <EditElementContext.Provider value={data}>
            <Resizable
                className={css.resizable}
                defaultSize={{
                    width: 200,
                    height: 200,
                }}
                onResizeStop={(...args) => console.log(args)}
            >
                001
                {children}
            </Resizable>
            <div className={css.container}>
                123
            </div>
        </EditElementContext.Provider>
    );
}
