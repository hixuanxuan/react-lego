### 存放ui组件
``` jsx
const cache = {};
function mustHasUniqueKey (Com, key) {
    if (process.env.NODE_ENV !== 'development') {
        return;
    }
    if (typeof key !== 'string') {
        throw Error(`${Com.name}组件需要一个唯一的key`);
    }
    // if (typeof cache) {
    //     throw Error(`${Com.name}组件需要一个唯一的key`);
    // }
}
```
``` js
    const submit = (key, callbak, dispatch) => (value) => {
        const prevent = {
            status: true
        };
        const val = callBack(value, prevent);
        if (!prevent.status) {
            return;
        }
        dispatch({
            type: `UPDATA_${key.toUpperCase()}`,
            payload: val
        })
    }
```

``` jsx
    // import {compose} from 'lodash';
    //func1,fun2
    func1 (a, b, c, d) {
        return a+ b+ c +d;
    }
    [a,b,c,d];
    func2(func1(a,b,c,d));
    [a,b,c,d]
    const compose = (...arg) => {
        // balalba
        return (...initalValue) => arg.reduceRight(
            (memo, currentFunc) => {
                return [currentFunc(...initalValue)];
            },
            initalValue
        )
    }
    function format (e, id, width) {
        return {
            value: e.target.value,
            id,
            width
        }
    }
    const defaultCbk = v => v;

    const UiCom = (key) => {
        const [state, callback] = usexxx(key);
        const dispatch = useDispatch(key);
        mustHasUniqueKey(key);

        // {key, data, callBack} = () => {

        // }
        const handleChange = useCallback(
            (e) => compose(submit(key, callbak, dispatch), format)(e, id, balabala) //()(),
            []
        );
        return (
            <div onClick={handleChange} />
        );
    };
```