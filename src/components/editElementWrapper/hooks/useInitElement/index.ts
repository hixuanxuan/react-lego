import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { initialSize, Conf } from '../../model';

    export default function useInitElement(conf: Conf, defaultProps = {}) {
    const dispatch = useDispatch();
    useMemo(
        () =>
            dispatch({
                type: 'init_section',
                ...conf,
                data: {
                    ...initialSize,
                    ...defaultProps
                },
            }),
        Object.values(conf),
    );
}
