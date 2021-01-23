import { fromJS } from 'immutable';

const defaultState: any = fromJS({});
export default function reducer(state = defaultState, action: any) {
    const { type } = action;
    switch (type) {
        case 'create_page_data': {
            return state.set(action.key, action.data || fromJS({}));
        }
        case 'init_section': {
            const { page, id, data } = action;
            return state.set(
                page,
                fromJS({
                    [id]: data,
                }),
            );
        }
        case 'update_section': {
            const { page, id, data } = action;
            return state.mergeIn([page, id], fromJS(data));
        }
        default:
            return state;
    }
}
