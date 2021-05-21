import request from '../request';

const getStatus = () => {
    return request.post('/user/checkLogin');
};
export default getStatus;
