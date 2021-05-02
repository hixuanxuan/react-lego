import request from '@utils/request';

const Url = '/api/getData';
const defaultId = '24f4e35b-8330-4982-a993-734a95c4fd2b';

export default async function getSevereData(id = defaultId) {
    if (process.env.export) {
        const url = require('@pages/../../exportData.json');
        return request.get(url);
    }
    return request.post(Url, { id }).then(
        res => {
            try {
                return JSON.parse(res.data.data);
            } catch {
                return null;
            }
        },
    );
}
