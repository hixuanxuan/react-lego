export { default as getReducers } from './getReducers';
export { default as lazyLoader } from './lazyLoader';
const pixelMap = {
    iphone: 324,
    h5: 324,
    'iphone-11': 410,
    'iphone-se': 375,
    mbp: 479,
    mbp2: 438,
    'mbp-1024': 386,
};
function CaclPixel(num: number, type: keyof typeof pixelMap) {
    console.log('pixelMap[type]', pixelMap[type]);
    return (num * document.body.clientWidth) / pixelMap[type];
}

export {
    CaclPixel,
};
