import React, { useCallback } from 'react';
import { usePage } from '@hooks';
import useSelfReducer from '@hooks/useSelfReducer';
import css from './index.module.less';

interface Props {
    unit: string;
    value: any;
    id: string;
    onChange: (id: string, val: number) => void
};

const InputBlock = ({unit, value, id, onChange}: Props) => {
    const handleChange = useCallback(
        (e) => {
            onChange(id, +e.target.value);
        },
        [id, onChange]
    );
    return [(
        <div className={css.content}>
            <input value={value} className={css.input} onChange={handleChange} type="number"/>
            <div className={css.surffix}>{unit}</div>
        </div>
    ),
    ];
};
export default InputBlock;