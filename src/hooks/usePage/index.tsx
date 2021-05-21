import React, { createContext, useContext, useMemo, useCallback } from 'react';

const PageContext: React.Context<string> = createContext('');

export function usePageProvider(
    id,
): [({ children }: any) => JSX.Element, string] {
    const Provider = useCallback(
        ({ children }: any) => (
            <PageContext.Provider value={id}>{children}</PageContext.Provider>
        ),
        [id],
    );
    return [Provider, id];
}
export default function usePage() {
    return useContext(PageContext);
}
