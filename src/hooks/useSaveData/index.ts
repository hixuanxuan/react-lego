import { useEffect } from 'react';
import { useSelfReducer } from '@hooks';
import request from '@utils/request';

const SaveUrl = '/api/save';
export default function useSaveData(id) {
    const data = useSelfReducer();
    useEffect(() => {
        console.log(data);
        request
            .post(SaveUrl, { id, data: JSON.stringify(data) })
            .then((res) => {
                console.log(res);
            });
    }, [data]);
}
