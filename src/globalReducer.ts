const defaultState: any = {
    a: 1,
    b: 222,
};
export default function reducer(state = defaultState, action: any) {
    console.log(action);
    return state;
    // switch(action.type) {
    // }
}
