import { useEffect, useRef } from 'react';
import { useSelfReducer } from '@hooks';
import request from '@utils/request';

const SaveUrl = '/api/save';
const Gap = 500;
export default function useSaveData(id) {
    const data = useSelfReducer();
    const timer = useRef(Date.now());
    useEffect(() => {
        console.log(data);
        if (Date.now() - timer.current < Gap) {
            return;
        }

        timer.current = Date.now();
        request
            .post(SaveUrl, { id, data: JSON.stringify(data) })
            .then((res) => {
                console.log(res);
            });
    }, [data]);
}
