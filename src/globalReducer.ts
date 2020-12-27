import { fromJS } from 'immutable';

const defaultState: any = fromJS({
    a: 1,
    b: 222,
});
export default function reducer(state = defaultState, action: any) {
    const { type } = action;
    switch (type) {
        case 'add': {
            const { a } = state.toJS();
            return state.merge(
                fromJS({
                    a: a + 1,
                }),
            );
        }
        default:
            return state;
    }
}
