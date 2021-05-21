import React, { useCallback } from 'react';
import { Space, Button } from 'antd';
import css from './index.module.less';
import LinkModal from '@components/LinkModal';
import { useSelfReducer } from '@/hooks';

interface Props {
    unit: string;
    value: any;
    id: string;
    onChange: (id: string, val: number) => void;
    title: string;
    placeholder: string;
}

const LinkInput = ({ value = {}, id, onChange }: Props) => {
    const [visible, setvisible] = React.useState(false);
    const state = useSelfReducer((state) => state);

    const handlebtnClick = useCallback(() => {
        setvisible(true);
    }, []);
    console.log('link', value);
    const handleOk = (checked, url) => {
        console.log(checked, url);
        onChange(id, {
            type: checked,
            url,
        });
        setvisible(false);
    };
    const url = value.type === 1 ? state[value.url].pageName : value.url;
    return (
        <>
            <div className={css.title}>设置链接</div>
            <Space size={8}>
                <div className={css.url}>{url}</div>
                <Button
                    onClick={handlebtnClick}
                    className={css.btn}
                    type="primary"
                >
                    设置链接
                </Button>
                <LinkModal
                    onOk={handleOk}
                    visible={visible}
                    setVisible={setvisible}
                />
            </Space>
        </>
    );
};
export default LinkInput;
