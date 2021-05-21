import React, { createContext, useContext, useMemo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

const SelfReducerContext = createContext('global');

export const SelfReducerProvider = SelfReducerContext.Provider;
export default function useSelfReducer(selector?: (state: any) => any) {
    const path = useContext(SelfReducerContext);
    return useSelector(
        (state: any) =>
            typeof selector === 'function'
                ? selector(state[path].present || state[path])
                : state[path].present || state[path],
        shallowEqual,
    );
}
