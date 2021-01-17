import { fromJS } from 'immutable';

const defaultState: any = fromJS({
});
export default function reducer(state = defaultState, action: any) {
    const { type } = action;
    switch (type) {
        case 'create_page_data': {
            return state.set(
                action.key,
                {},
            );
        }
        default:
            return state;
        }
}
