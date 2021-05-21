import React from 'react';
import { v4 as uuid } from 'uuid';
import {
    LatopDevice,
    Latop2Device,
    WebDevice,
    DesktopDevice,
    AndroidDevice,
    IPhone1Device,
    IPhone2Device,
    IPhone3Device,
} from './myIcon';

export const PC_DEVICES_MAP = [
    {
        uuid: uuid(),
        name: '小笔记本',
        size: '1024 x 1024',
        icon: <LatopDevice />,
        type: 'mbp-1024',
    },
    {
        uuid: uuid(),
        name: '笔记本',
        size: '1440 x 1024',
        icon: <Latop2Device />,
        type: 'mbp',
    },
    {
        uuid: uuid(),
        name: '桌面',
        size: '1920 x 1080',
        icon: <DesktopDevice />,
        type: 'mbp2',
    },
];

export const MOBILE_DEVICES_MAP = [
    {
        uuid: uuid(),
        name: 'iPhone SE',
        size: '320 x 568',
        icon: <IPhone1Device />,
        type: 'iphone-se',
    },
    {
        uuid: uuid(),
        name: 'iPhone-11',
        size: '375 x 812',
        icon: <IPhone2Device />,
        type: 'iphone-11',
    },
    {
        uuid: uuid(),
        name: 'iPhone',
        size: '390 x 844',
        icon: <IPhone3Device />,
        type: 'h5',
    },
];
export const CUSTOM_DEVICES_MAP = [
    {
        uuid: uuid(),
        icon: <WebDevice />,
        custom: true,
        type: 'diy',
    },
];
