import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelfReducer } from '@hooks';
import { usePageProvider } from '@hooks/usePage';
import EditElementWrapper, {
    useEditState,
} from '@components/editElementWrapper';
import Box from '@components/Box';
import PageCollapse from '@widgets/pageCollapse';
import List from '@components/List';
import css from './index.module.less';
import { Button } from 'antd';
// const { id, mod } = process.env;
// function APP() {
//     return mod === 'edit' ? editRouter : previewRoter;
// }
// const { data } = reqRouters();
console.log(useEditState);
let flag = true;
function Demo() {
    const [{ background = 'black' }, updater] = useEditState();
    return (
        <div className={css.test} style={{ background }}>
            颜色可编辑：
            <input
                type="text"
                onBlur={(e) => updater({ background: e.target.value })}
            />
        </div>
    );
}

function ButtonDemo() {
    const [{ text = '按钮' }] = useEditState();
    return <Button type="primary">{text}</Button>;
}
const defaultPageValue: {} = {
    list: [],
};
const App: React.FC<{}> = (props) => {
    const [PageProvider, page] = usePageProvider('page', defaultPageValue);
    const dispatch = useDispatch();
    const state = useSelfReducer((state) => state[page]);
    const list = state.list;
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
        <PageProvider>
            <Box
                elementType={Demo}
                cardList={list}
                changeCardList={changeCardList}
            >
                点我可以拖个box~
            </Box>
            <Box
                elementType={ButtonDemo}
                cardList={list}
                changeCardList={changeCardList}
            >
                点我可以拖个Button
            </Box>
            <List cardList={list} changeCardList={changeCardList} />
            {/* <DragDemo>
               {getEditCom('demo', Demo)}
            </DragDemo> */}
            <PageCollapse />
        </PageProvider>
    );
};

export default App;
