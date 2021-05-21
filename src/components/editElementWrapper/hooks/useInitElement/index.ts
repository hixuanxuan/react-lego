import useSelfReducer from '@hooks/useSelfReducer';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { initialSize, Conf } from '../../model';

    export default function useInitElement(conf: Conf, defaultProps = {}) {
    const dispatch = useDispatch();
    const state = useSelfReducer((state => state[conf.page][conf.id]));
    useMemo(
        () => {
            dispatch({
                type: 'init_section',
                ...conf,
                data: {
                    ...initialSize,
                    ...defaultProps,
                    ...state,
                },
            });
        },
        Object.values(conf),
    );
}
