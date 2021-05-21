import React, { useState } from 'react';
import { Tabs, message } from 'antd';
import css from './index.module.less';
import Button from './_components/Button';
import Device, { DeviceProps } from './_components/Device';
import {
    PC_DEVICES_MAP,
    MOBILE_DEVICES_MAP,
    CUSTOM_DEVICES_MAP,
} from './Devices';
import Context from './Context';
import { Modal } from 'antd';

const { TabPane } = Tabs;

function callback(key: any) {
    console.log(key);
}

interface DeviceMapItemType extends DeviceProps {
    uuid: string;
}

// 设备列表渲染
const Devices = (DEVICES_MAP: Array<DeviceMapItemType>) => (
    <div className={css.devices}>
        {DEVICES_MAP.map((device) => {
            const {
                name,
                size,
                icon,
                custom = false,
                uuid,
                type = 'h5',
            } = device;
            return (
                <Device
                    key={uuid}
                    {...{
                        name,
                        size,
                        icon,
                        custom,
                        uuid,
                        type,
                    }}
                />
            );
        })}
    </div>
);
interface valuectx {
    icon: React.ReactElement;
    name?: string;
    size?: string;
    custom?: boolean;
}
interface AddProject {
    handleOk: (vaule: valuectx, name: string) => Promise<boolean>;
    visible: boolean;
    setVisible: (visible: boolean) => void;
}
const AddProject: React.FC<AddProject> = ({
    handleOk,
    visible,
    setVisible,
}) => {
    const [value, setValue] = useState<valuectx>({} as valuectx);
    const [name, setName] = useState('');
    const handleClick = () => {
        // 向后端发送请求创建项目，成功后调用回掉，关闭弹窗
        console.log(value, name);
        if (!name) {
            message.error('项目名称必填～');
            return;
        }
        handleOk(value, name).then((visible) => {
            setVisible(visible);
        });
    };

    return (
        <Modal
            visible={visible}
            className={css.addModal}
            title={null}
            footer={null}
            width={666}
            onCancel={() => setVisible(false)}
            maskClosable={false}
        >
            <div className={css.project}>
                <div className={css.title}>创建项目</div>
                <div className={css['project-body']}>
                    <div className={css['project-name']}>
                        <input
                            className={css.input}
                            type="text"
                            name=""
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="请输入项目名称"
                        />
                    </div>
                    <div className={css['project-type']}>
                        {/* 点击切换的单选操作 */}
                        <Context.Provider value={{ value, setValue }}>
                            <Tabs
                                defaultActiveKey="1"
                                onChange={callback}
                                centered
                                className="lego-tabs"
                            >
                                <TabPane tab="移动H5" key="1">
                                    {Devices(MOBILE_DEVICES_MAP)}
                                </TabPane>
                                <TabPane tab="PC端" key="2">
                                    {Devices(PC_DEVICES_MAP)}
                                </TabPane>
                                <TabPane tab="自定义" key="3">
                                    {Devices(CUSTOM_DEVICES_MAP)}
                                </TabPane>
                            </Tabs>
                        </Context.Provider>
                    </div>
                    <Button type="primary" width={320} onClick={handleClick}>
                        立即创建
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default AddProject;
