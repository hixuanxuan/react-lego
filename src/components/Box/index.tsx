/**
 * filename: Box
 * overview: 用来承载界面最上方水果类型的 Box 组件
 */

import React from 'react';
import { DragSourceMonitor, useDrag } from 'react-dnd';
import { v4 as uuid } from 'uuid';
let id = 1;

const Box: React.FC<any> = ({elementType ,cardList, changeCardList, children}) => {

    const style: React.CSSProperties = {
        display: 'inline-block',
        margin: 20,
        padding: '16px 30px',
        width: 100,
        cursor: 'move'
    }
    const box = {
        type: 'card',
        elementType,
    };
    const [, drag] = useDrag({
        item: box,
        begin(monitor: DragSourceMonitor) {
            const useless = cardList.find((item: any) => item.id === -1);
            // 拖拽开始时，向 cardList 数据源中插入一个占位的元素，如果占位元素已经存在，不再重复插入
            console.log('beeeeeee');
            if (!useless) {
                changeCardList([{ bg: "aqua", category: '放这里', id: -1 }, ...cardList]);
            }
            return box;
        },
        end(_: unknown, monitor: DragSourceMonitor) {
            const uselessIndex = cardList.findIndex((item: any) => item.id === -1);

            /**
             * 拖拽结束时，判断是否将拖拽元素放入了目标接收组件中
             *  1、如果是，则使用真正传入的 box 元素代替占位元素
             *  2、如果否，则将占位元素删除
             */
            let newList = [...cardList];
            console.log(monitor.getItem());
            if (monitor.didDrop()) {
                newList.splice(uselessIndex, 1, { ...monitor.getItem(), id: uuid() });
            } else {
                newList.splice(uselessIndex, 1);
            }
            console.log(cardList);
            // 更新 cardList 数据源
            changeCardList(newList);
        },
    });
    return (
        <div ref={ drag } style={ style }>{ children }</div>
    )
};

export default Box;