interface StringObj {
    [key: string]: string
}

function getQuery(): StringObj {
    const ret: StringObj = {};
    window.location.search
        .substr(1)
        .replace(/(\w+)=(\w+)/gi, (_, k, v) => {
            ret[k] = unescape(v);
            return '_';
        });
    return ret;
}
function getQueryString(name: string) {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
    const res = window.location.search.substr(1).match(reg);
    if (res) {
        return unescape(res[2]);
    }
    return '';
}

export {
    getQuery,
    getQueryString,
};
