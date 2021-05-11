import React from 'react';
import LegoSvg from './lego.svg';
import { Space, Divider } from 'antd';
import style from './index.module.less';

import Title from './components/Title';
import LoginPanel from './components/LoginPanel';
const LoginPage = () => (
    <div className={style['login-page']}>
        <div className={style['img-container']}> </div>
        <div className={style['login-panel-container']}>
            <div className={style.logo}>
                <Space align="center" size={12} style={{ lineHeight: 1 }}>
                    <LegoSvg />

                    <Space
                        align="center"
                        size={10}
                        split={<Divider type="vertical" />}
                    >
                        <span>楽高</span>
                        <span>legao</span>
                    </Space>
                </Space>
            </div>
            <div className={style.panel}>
                <Space size={40} direction="vertical">
                    <Title>登录乐高</Title>
                    <div className={style['input-wrapper']}>
                        <LoginPanel />
                    </div>
                </Space>
            </div>
        </div>
    </div>
);

export default LoginPage;
