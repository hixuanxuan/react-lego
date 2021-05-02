import React, { useCallback } from 'react';
import { usePage } from '@hooks';
import Conf from './model';
import useSelfReducer from '@hooks/useSelfReducer';
import css from './index.module.less';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';

interface Props {
    id: string;
    editFields: string[];
}
const box = {
    type: 'card',
};
const defaultExt = {};

export default function AttrPanel({
    id,
    editFields,
    ext = defaultExt,
    selectSection,
}: Props) {
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
        // xx.name xx.[children].[idx].name = value;
        // xx[''[name]
        // nav[0]color
        (name, value) => {
            if (ext.address) {
                // children.idx 是个字符串
                name = ext.address + '.' + name;
            }
            updater({
                [name]: value,
            });
        },
        [updater, ext],
    );
    // delete_section_data
    const handleDeleteCom = useCallback(() => {
        dispatch({
            type: 'delete_section_data',
            id,
            pageId: page,
        });
        selectSection({
            id: '',
            editFields: [],
        });
    }, []);
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
                                        key={
                                            ext.address
                                                ? `${ext.address}.${valueKey}`
                                                : valueKey
                                        }
                                        value={_.get(
                                            data,
                                            ext.address
                                                ? `${ext.address}.${valueKey}`
                                                : valueKey,
                                        )}
                                        onChange={handleChange}
                                        {...props}
                                        ext={ext}
                                    />
                                );
                            })}
                            {/* <InputBlock unit="W" value={W} onChange={handleChange} id="width" />
                                <InputBlock unit="H" value={H} onChange={handleChange} id="height" /> */}
                        </div>
                    );
                })}
                {!!id && (
                    <Button type="dashed" onClick={handleDeleteCom}>
                        删除该组件
                    </Button>
                )}
            </div>
        </div>
    );
}
