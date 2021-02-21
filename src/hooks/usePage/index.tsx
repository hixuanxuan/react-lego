import React, { createContext, useContext, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

const PageContext: React.Context<symbol> = createContext(Symbol('page'));

export function usePageProvider(
    name = 'page',
    defaultValue?: any,
): [({ children }: any) => JSX.Element, symbol] {
    const dispatch = useDispatch();
    const page: symbol = useMemo(() => {
        const key = Symbol(name);
        dispatch({
            type: 'create_page_data',
            key,
            data: defaultValue,
        });
        return key;
    }, [name, defaultValue]);
    const Provider = useCallback(
        ({ children }: any) => (
            <PageContext.Provider value={page}>{children}</PageContext.Provider>
        ),
        [page],
    );
    return [Provider, page];
}
export default function usePage() {
    return useContext(PageContext);
}
