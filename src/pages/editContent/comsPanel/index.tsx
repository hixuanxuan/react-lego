import React, { useCallback } from 'react';
import css from './index.module.less';
import { Collapse, Button } from 'antd';
import Box from '@components/Box';
import EditElementWrapper, {
    useEditState,
} from '@components/editElementWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { useSelfReducer, usePage } from '@hooks';

import ListSvg from '@imgs/svg/list.svg';
import ButtonSvg from '@imgs/svg/button.svg';
import FreeSvg from '@imgs/svg/container.svg';
import SwiperSvg from '@imgs/svg/swiper.svg';
import GallerySvg from '@imgs/svg/gallery.svg';
console.log('FreeSvg', FreeSvg);
// TODO: 先放到这里站位
const DragLogo = ({ Logo, text }) => {
    return (
        <div className={css.item}>
            <div className={css.logo}>
                <Logo className={css.img} />
            </div>
            <p className={css.text}>{text}</p>
        </div>
    );
};
const { Panel } = Collapse;
const defaultPageValue: {} = {
    list: [],
};
const ComsPanel = () => {
    const dispatch = useDispatch();
    console.log(useSelector((state) => state));
    const page = usePage();
    const state = useSelfReducer((state) => state[page]);
    const list = (state && state.list) || [];
    const changeCardList = useCallback(
        (newList) => {
            dispatch({
                type: 'update_list',
                page,
                data: newList,
            });
        },
        [dispatch, page],
    );
    return (
        <div className={css.ComsPanel}>
            <div className={css.title}>
                <div className={css.header}>
                    <span>组件</span>
                </div>
                <Collapse defaultActiveKey={['1']} ghost>
                    <Panel header="容器" key="1">
                        <div className={css.content}>
                            <Box
                                elementType={'Demo'}
                                cardList={list}
                                changeCardList={changeCardList}
                            >
                                <DragLogo Logo={FreeSvg} text={'自由容器'} />
                            </Box>
                        </div>
                    </Panel>
                    <Panel header="常用组件" key="2">
                        <div className={css.content}>
                            <Box
                                elementType={'ButtonDemo'}
                                cardList={list}
                                changeCardList={changeCardList}
                            >
                                <DragLogo Logo={ButtonSvg} text={'按钮'} />
                            </Box>
                            <Box
                                elementType={'Carousel'}
                                cardList={list}
                                changeCardList={changeCardList}
                            >
                                <DragLogo Logo={SwiperSvg} text={'轮播图'} />
                            </Box>
                            <Box
                                elementType={'ImageCom'}
                                cardList={list}
                                changeCardList={changeCardList}
                            >
                                <DragLogo Logo={GallerySvg} text={'图文'} />
                            </Box>
                        </div>
                    </Panel>
                </Collapse>
            </div>
        </div>
    );
};
export default ComsPanel;
