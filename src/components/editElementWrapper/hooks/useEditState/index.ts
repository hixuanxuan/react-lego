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
    const data = useSelfReducer((state) => state.getIn([page, id]));
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
    const memoData: any = useMemo(() => data.toJS(), [data]);
    const useEditStateFn: typeUseEditState = useCallback(
        () => [memoData, updater],
        [memoData, updater],
    );
    return [Context.Provider, useEditStateFn];
}

export default function useEditState() {
    return useContext(Context)();
}
