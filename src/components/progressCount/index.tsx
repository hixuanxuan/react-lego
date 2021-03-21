// 用于调整大小，有上下限的调整大小组件
import React from 'react';
import { Slider, Space } from 'antd';
import css from './index.module.less';

// TODO: 单位的事情待确认
const ProgressCount = ({
    id,
    value,
    min = 1,
    max = 20,
    onChange,
    title = '图标大小',
}) => {
    console.log('value', value);
    return (
        <div className={css.wrapper}>
            <p className={css.title}>{title}</p>
            {/* <Space size={6}> */}
            <div className={css.wrap}>
                <div className={css.slid}>
                    <Slider
                        value={value}
                        step={1}
                        max={max}
                        min={min}
                        onChange={(val) =>
                            console.log('---->val', val) || onChange(id, val)
                        }
                    />
                </div>
                <span className={css.text}>{value}</span>
            </div>
            {/* </Space> */}
        </div>
    );
};
export default ProgressCount;
