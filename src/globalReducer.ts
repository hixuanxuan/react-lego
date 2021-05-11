import { produce } from 'immer';
const defaultState = {
    a: 1,
    b: 222,
};
export default function reducer(prev = defaultState, action: any) {
    return produce(prev, (state: any) => {
        const { type } = action;
        switch (type) {
            case 'add': {
                state.a++;
            }
            default:
                return state;
        }
    });
}
