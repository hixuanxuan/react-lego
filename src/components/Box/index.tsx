/**
 * filename: Box
 * overview: 用来承载界面最上方水果类型的 Box 组件
 */

import React from 'react';
import { Button } from 'antd';
import { DragSourceMonitor, useDrag } from 'react-dnd';
import { v4 as uuid } from 'uuid';
import Carousel from '@components/carousel';
import { useEditState } from '../editElementWrapper';
import FreeContainer from '@components/freeContainer';
const id = 1;

function ButtonDemo() {
    const [{ text = '按钮', width, height }] = useEditState();
    return (
        <Button style={{ width, height }} type="primary">
            {text}
        </Button>
    );
}
ButtonDemo.editFields = ['width', 'height', 'text', 'link'];
ButtonDemo.defaultProps = {
    width: 64,
    height: 32,
};

const ImageCom = () => {
    const [{ src, text, width, height, color }] = useEditState();
    return (
        <div style={{ width, height }}>
            <img style={{ width: '100%' }} src={src} />
            <p style={{ color: color }}>{text}</p>
        </div>
    );
};
ImageCom.defaultProps = {
    src:
        'http://19446153.s61i.faiusr.com/2/AD0IifOiCRACGAAg6_zU5gUoqJOuhwEw7gU46AI!900x900.jpg.webp',
    text: 'demo',
    width: '100%',
    color: '#333',
};
ImageCom.editFields = ['width', 'height', 'text', 'color', 'upload'];

export const elementTypeMap = {
    ImageCom,
    ButtonDemo,
    FreeContainer,
    Carousel,
};
const Box: React.FC<any> = ({
    elementType,
    cardList,
    changeCardList,
    children,
    accept,
    containerType,
}) => {
    const [_, update] = useEditState();
    const style: React.CSSProperties = {
        // display: 'inline-block',
        // margin: 20,
        // padding: '16px 30px',
        // width: 100,
        cursor: 'move',
    };
    const box = {
        // index: -1,
        type: accept || 'card',
        elementType,
        containerType: containerType || 'normal',
        update,
    };
    const [, drag] = useDrag({
        item: box,
        begin(monitor: DragSourceMonitor) {
            const useless = cardList.find((item: any) => item.id === -1);
            // 拖拽开始时，向 cardList 数据源中插入一个占位的元素，如果占位元素已经存在，不再重复插入
            console.log('beeeeeee');
            if (!useless) {
                changeCardList([
                    { bg: 'aqua', category: '放这里', id: -1 },
                    ...cardList,
                ]);
            }
            return box;
        },
        end(_: unknown, monitor: DragSourceMonitor) {
            const info = monitor.getDropResult();

            const uselessIndex = cardList.findIndex(
                (item: any) => item.id === -1,
            );

            /**
             * 拖拽结束时，判断是否将拖拽元素放入了目标接收组件中
             *  1、如果是，则使用真正传入的 box 元素代替占位元素
             *  2、如果否，则将占位元素删除
             */
            const newList = [...cardList];
            if (info && info.update) {
                newList.splice(uselessIndex, 1);
                info.update({
                    children: [{ ...monitor.getItem(), id: uuid() }],
                });
                changeCardList(newList);
                return;
            }
            console.log(monitor.getItem());
            if (monitor.didDrop()) {
                newList.splice(uselessIndex, 1, {
                    ...monitor.getItem(),
                    id: uuid(),
                });
            } else {
                newList.splice(uselessIndex, 1);
            }
            console.log(cardList);
            // 更新 cardList 数据源
            changeCardList(newList);
        },
    });
    return (
        <div ref={drag} style={style}>
            {children}
        </div>
    );
};

export default Box;
