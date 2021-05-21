import React, { useState } from 'react';
import {
 Modal, Radio, Form, Select, Input, Space, Button,
} from 'antd';
import { useSelfReducer } from '@/hooks';
import css from './index.module.less';

const { Option } = Select;
interface RadioChangeEventTarget {
    checked: boolean;
    value: number;
}
interface RadioChangeEvent {
    target: RadioChangeEventTarget;
    stopPropagation: () => void;
    preventDefault: () => void;
    nativeEvent: MouseEvent;
}
const SelectPage = ({ value, onChange }) => {
    const state = useSelfReducer((state) => state);
    const pageIds = Object.keys(state).filter(i => i !== 'type');

    // function handleChange(value) {
    //     console.log(`selected ${value}`, state);
    // }
    // onChange={handleChange}
    return (
        <Select value={value} onChange={onChange} style={{ width: 180 }}>
            {pageIds.map((p) => (
                <Option key={p} value={p}>
                    {state[p].pageName}
                </Option>
            ))}
        </Select>
    );
};
const InputUrl = ({ value, onChange }) => {
    const [prefix, setPrefix] = useState('http://');
    const [vall, setVall] = useState('');
    const handlechange = (val) => {
        setPrefix(val);
    };
    const selectBefore = (
        <Select
          onChange={handlechange}
          defaultValue="http://"
          className="select-before"
        >
            <Option value="http://">http://</Option>
            <Option value="https://">https://</Option>
        </Select>
    );
    const handleInputChange = (e) => {
        const val = e.target.value;
        console.log(val);
        setVall(val);
        onChange(prefix + val);
    };
    return (
        <div style={{ marginBottom: 16 }}>
            <Input
              value={vall}
              onChange={handleInputChange}
              addonBefore={selectBefore}
              placeholder="请输入网址"
            />
        </div>
    );
};
const chooseMap = {
    1: {
        com: <SelectPage />,
        name: 'select',
        label: '内链页面',
        rules: [{ required: true, message: '请选择链接页面' }],
    },
    2: {
        com: <InputUrl />,
        name: 'input',
        label: '外链url',
        rules: [
            {
                required: true,
                pattren: /(http|https):\/\/([\w.]+\/?)\S*/,
                message: '请输入正确外链的url',
            },
        ],
    },
};
const useChooseCentent = (type) => {
    // 获取pages
    const choosed = chooseMap[type] || {};
    const Item = (
        <div className={css.content}>
            <Form.Item
              label={choosed.label}
              rules={choosed.rules}
              name={choosed.name}
            >
                {choosed.com}
            </Form.Item>
        </div>
    );
    return [Item];
};
interface LinkModalProps {
    visible: boolean;
    onOk: (type: any) => void;
    setVisible: (vi: boolean) => void;
}
const LinkModal: React.FC<LinkModalProps> = ({ visible, onOk, setVisible }) => {
    const [checked, setChecked] = useState(1);
    const content = useChooseCentent(checked);
    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setChecked(e.target.value);
    };
    const onHandleOK = (value) => {
        // 吐出去是内链还是外链以及url
        console.log(checked, value);
        onOk(checked, value[chooseMap[checked]?.name]);
    };
    const onFinish = (value) => {
        console.log(value);
        onHandleOK(value);
    };
    const handleClose = () => {
        setVisible(false);
    };
    return (
        <Modal
          title="添加链接"
          footer={null}
          onCancel={handleClose}
          visible={visible}
          className={css.modal}
        >
            <div className={css.item}>
                <Space size={2}>
                    <span>选链接类型：</span>
                    <Radio.Group onChange={onChange} value={checked}>
                        <Radio value={1}>站内链接</Radio>
                        <Radio value={2}>站外链接</Radio>
                    </Radio.Group>
                </Space>
            </div>
            <Form onFinish={onFinish}>
                {content}
                <Form.Item>
                    <div className={css.btn}>
                        <Button type="primary" htmlType="submit">
                            确认添加
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </Modal>
    );
};
export default LinkModal;
