import { produce } from 'immer';
const defaultState: any = {};
export default function reducer(prev = defaultState, action: any) {
    return produce(prev, (state: any) => {
        const { type } = action;
        switch (type) {
            case 'create_page_data': {
                const { key, data } = action;
                state[key] = data;
                break;
            }
            case 'init_section': {
                const { page, id, data } = action;
                state[page][id] = data;
                break;
            }
            case 'update_section': {
                const { page, id, data } = action;
                state[page][id] = { ...prev[page][id], ...data };
                break;
            }
            case 'update_list': {
                const { page, data } = action;
                state[page].list = data;
                break;
            }
            default:
                return state;
        }
    });
}
