import React, { createContext, useContext, useMemo } from 'react';
import { useDispatch } from 'react-redux';

const PageContext: React.Context<symbol> = createContext(Symbol('page'));

export function usePageProvider(name = 'page') {
    const dispatch = useDispatch();
    const page = useMemo(
        () => {
            const key = Symbol(name);
            dispatch({
                type: 'create_page_data',
                key,
            });
            return key;
        },
        [name],
    );
    return ({ children }: any) => (
        <PageContext.Provider value={page}>
            {children}
        </PageContext.Provider>
    );
}
export default function usePage() {
    return useContext(PageContext);
}
