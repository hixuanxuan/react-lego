import React from 'react';
import { Form, Input } from 'antd';
import Button from '../Button';
import style from './index.module.less';
import request from '@utils/request';
import { useHistory } from 'react-router-dom';

const LoginPanel = () => {
    const history = useHistory();

    const onFinish = (value) => {
        console.log(value);
        request.post('/user/login', value).then((res) => {
            console.log(res);
            if (+res.code === 0) {
                // 跳转创建页面
                history.push('/addproject');
            }
        });
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入用户名' }]}
                >
                    <Input className={style.input} placeholder="请输入用户名" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input className={style.input} placeholder="请输入密码" />
                </Form.Item>
                <div className={style.tips}>未注册的将自动注册</div>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        登录/注册
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
export default LoginPanel;
