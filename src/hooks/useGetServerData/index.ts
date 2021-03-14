import request from '@utils/request';

const Url = '/api/getData';
const defaultId = '24f4e35b-8330-4982-a993-734a95c4fd2b';

export default function getSevereData(id = defaultId) {
    return request.post(Url, { id }).then(
        res => {
            console.log(res);
            try {
                return JSON.parse(res.data.data);
            } catch {
                return null;
            }
        },
    );
}
