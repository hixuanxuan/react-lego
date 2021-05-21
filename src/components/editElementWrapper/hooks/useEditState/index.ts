import { createContext, useCallback, useMemo, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useSelfReducer } from '@hooks';
import { Conf } from '../../model';

type typeUseEditState = () => [any, (params: {}) => void];
const Context = createContext(() => []);
export function useEditStateProvider({
    id,
    page,
}: Conf): [any, typeUseEditState] {
    const data = useSelfReducer((state) => state[page][id]);
    const dispatch = useDispatch();
    const updater = useCallback(
        (params) => {
            dispatch({
                type: 'update_section',
                id,
                page,
                data: params,
            });
        },
        [id, page],
    );
    const useEditStateFn: typeUseEditState = useCallback(
        () => [data, updater],
        [data, updater],
    );
    return [Context.Provider, useEditStateFn];
}

export default function useEditState() {
    return useContext(Context)();
}
