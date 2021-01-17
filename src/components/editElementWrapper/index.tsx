import React, { createContext } from 'react';
import { useSelector } from 'react-redux';
import { Resizable } from 're-resizable';
import css from './index.module.less';

console.log(css);
export interface Props {
    children: React.ReactNode;
    page: symbol;
}
// const store = {};
const EditElementContext = createContext({});
export default function editElementWrapper({ children, page }: Props) {
    const data = useSelector(
        (store: any) => store[page],
    );
    // const

    return (
        <EditElementContext.Provider value={data}>
            <Resizable
                className={css.resizable}
                defaultSize={{
                    width: 200,
                    height: 200,
                }}
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
