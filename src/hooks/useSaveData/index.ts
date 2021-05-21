import { useEffect, useRef } from 'react';
import { useSelfReducer } from '@hooks';
import request from '@utils/request';

const SaveUrl = '/api/save';
const Gap = 500;
export default function useSaveData(id) {
    const data = useSelfReducer();
    const timer = useRef(null);
    useEffect(() => {
        timer.current && clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            request
                .post(SaveUrl, { id, data: JSON.stringify(data) })
                .then((res) => {
                    console.log(res);
                });
            timer.current = null;
        }, Gap);
    }, [data]);
}
