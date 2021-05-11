export { default as getReducers } from './getReducers';
export { default as lazyLoader } from './lazyLoader';
function CaclPixel(num: number) {
    return (num * document.body.clientWidth) / 324;
}

export {
    CaclPixel,
};
