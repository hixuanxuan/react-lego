import React, { useCallback } from 'react';
import { usePage } from '@hooks';
import Conf from './model';
import useSelfReducer from '@hooks/useSelfReducer';
import css from './index.module.less';
import { useDispatch } from 'react-redux';

interface Props {
    id: string;
    editFields: string[];
}
const box = {
    type: 'card',
};

export default function AttrPanel({ id, editFields }: Props) {
    // if (!id) {
    //     return null;
    // }
    const page = usePage();
    const data = useSelfReducer((state) => state?.[page]?.[id]) || {};
    const sections: any = {};
    const order: string[] = [];
    if (editFields) {
        editFields.forEach((key: any) => {
            const item = (Conf as any)[key];
            if (item) {
                if (!sections[item.group]) {
                    order.push(item.group);
                    sections[item.group] = [];
                }
                sections[item.group].push(item);
            }
        });
    }

    const dispatch = useDispatch();
    const updater = useCallback(
        (params) => {
            dispatch({
                type: 'update_section',
                id,
                page,
                data: params,
            });
        },
        [id, page],
    );
    const handleChange = useCallback(
        (name, value) => {
            updater({
                [name]: value,
            });
        },
        [updater],
    );
    return (
        <div className={css.content}>
            <div className={css.title}>属性</div>
            <div key={id}>
                {order.map((key) => {
                    const fields = sections[key];
                    console.log(fields);
                    return (
                        <div className={css.section}>
                            {fields.map((item: any) => {
                                const { Component, valueKey, props } = item;
                                return (
                                    <Component
                                        key={valueKey}
                                        value={data[valueKey]}
                                        onChange={handleChange}
                                        {...props}
                                    />
                                );
                            })}
                            {/* <InputBlock unit="W" value={W} onChange={handleChange} id="width" />
                                <InputBlock unit="H" value={H} onChange={handleChange} id="height" /> */}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
