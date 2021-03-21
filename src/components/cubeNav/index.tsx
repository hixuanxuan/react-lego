import React, { useCallback } from 'react';
import css from './index.module.less';
import { useHandleSelect } from '@components/ContentPanel';
import { useEditState } from '@components/editElementWrapper';
const RoundNavItem = ({ id, idx, text, src, size, color, fontSize }) => {
    console.log('fontSize', size, idx);
    const handleSelect = useHandleSelect();
    return (
        <div
            className={css.item}
            onClick={(e) => {
                e.stopPropagation();
                handleSelect({
                    id,
                    editFields: ['fontSize', 'color', 'upload', 'text'],
                    ext: { address: 'navs.' + idx },
                });
            }}
        >
            <div
                style={{ width: size, backgroundColor: color, height: size }}
                className={css.icon}
            >
                <img style={{ width: size - 10 }} src={src} />
            </div>
            <span style={{ fontSize }}>{text}</span>
        </div>
    );
};
RoundNavItem.defaultProps = {
    text: '商务',
    src: require('./imgs/icon1.png'),
    width: 43,
    color: '#82BAFF',
    fontSize: 12,
};
const generateDefaultItem = () => ({
    text: '商务',
    src: require('./imgs/icon1.png'),
    width: 43,
    color: '#82BAFF',
    fontSize: 12,
});
// 100px 8个，排列
// 图标大小，图标个数，间距18px
const CubeNav = ({ id, type }) => {
    console.log(useEditState());
    const [{ size = 40, count, navs = [] }] = useEditState();
    // const arr = new Array(size).fill('');
    // const [{ src, text, width, height, color }] = useEditState();
    // 生成uuid，存到redux
    return (
        <div className={css.wrapper}>
            {navs.slice(0, count).map((i, idx) => (
                <RoundNavItem id={id} idx={idx} size={size} {...i} />
            ))}
        </div>
    );
};
CubeNav.editFields = ['size', 'count'];
CubeNav.defaultProps = {
    navs: Array(20)
        .fill(1)
        .map((i) => generateDefaultItem()),
    count: 10,
};
export default CubeNav;
