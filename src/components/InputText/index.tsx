import React, { useCallback } from 'react';
import { usePage } from '@hooks';
import useSelfReducer from '@hooks/useSelfReducer';
import css from './index.module.less';

interface Props {
    unit: string;
    value: any;
    id: string;
    onChange: (id: string, val: number) => void,
    title: string;
    placeholder: string;
}

const InputText = ({
unit, value, id, title, placeholder, onChange,
}: Props) => {
    const handleChange = useCallback(
        (e) => {
            onChange(id, e.target.value);
        },
        [id, onChange],
    );
    return (
        <>
            <div className={css.title}>{title}</div>
            <div className={css.content}>
                <input value={value} className={css.input} onChange={handleChange} placeholder={placeholder} />
                {/* <div className={css.surffix}>{unit}</div> */}
            </div>
        </>
    );
};
export default InputText;
