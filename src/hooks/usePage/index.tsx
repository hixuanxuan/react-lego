import React, { createContext, useContext, useMemo, useCallback } from 'react';
import { fromJS } from 'immutable';
import { useDispatch } from 'react-redux';

const PageContext: React.Context<symbol> = createContext(Symbol('page'));

export function usePageProvider(name = 'page', defaultValue?: any) {
    const dispatch = useDispatch();
    const page = useMemo(() => {
        const key = Symbol(name);
        dispatch({
            type: 'create_page_data',
            key,
            data: fromJS(defaultValue),
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
