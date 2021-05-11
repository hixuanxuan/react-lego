import React, { useState, useCallback } from 'react';
import { MoreOutlined } from '@ant-design/icons';
import css from './index.module.less';
import cn from 'classnames';
import { Input, Modal } from 'antd';
import LegoPopMenu from '@components/legoPopMenu';
import { useSelfReducer } from '@hooks';
import usePage from '@hooks/usePage';
import { useDispatch } from 'react-redux';
import { useRouteMatch, useHistory } from 'react-router-dom';

interface CollapseItem {
    pageName: string;
    id: string | number;
}
const menus = [
    { id: 1, label: '删除页面' },
    { id: 2, label: '修改名称' },
];
function trim(str: string) {
    return str.replace(/[ ]/g, '');
}
const CollapseItem = (props: CollapseItem) => {
    const { pageName, id } = props;

    const [select, setselect] = useState(false);
    const dispatch = useDispatch();
    const state = useSelfReducer((state) => state[id]);
    const match = useRouteMatch('/edit/:pro/:uid');
    const history = useHistory();
    console.log('match--->', match);
    const toggleSelect = () => {
        setselect(!select);
    };
    const handleInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        setselect(false);
        console.log(e.target.value);
        const val = trim(`${e.target.value}`);
        // dispatch修改的事件
        dispatch({
            type: 'update_page_name',
            page: id,
            pageName: !val ? '页面' : val,
        });
    };
    const handlePageClick = useCallback(() => {
        if (id === match.params.uid) {
            return;
        }
        history.push('/edit/' + match.params.pro + '/' + id);
    }, []);
    const handleDelete = () => {
        dispatch({
            type: 'delete_page_data',
            key: id,
        });
    };
    const handleClick = (id: number | string) => {
        switch (id) {
            case 1:
                // 删除，dispatch到redux删除该页面
                Modal.confirm({
                    title: '提示',
                    content: '您确定要删除这个页面吗，删除后将无法恢复～',
                    onOk: () => {
                        handleDelete();
                    },
                    onCancel: () => {
                        return Promise.resolve();
                    },
                });
                break;
            case 2:
                toggleSelect();
                break;
            default:
                break;
        }
    };
    return (
        <div
            className={cn(css.collapseItem, {
                [css.active]: match.params.uid === id,
            })}
        >
            {!select ? (
                <div style={{ width: 200 }} onClick={handlePageClick}>
                    {pageName}
                </div>
            ) : (
                <Input
                    size="small"
                    defaultValue={pageName}
                    onBlur={handleInputBlur}
                />
            )}

            <div className={css.item}>
                <LegoPopMenu
                    menus={menus}
                    handleClick={handleClick}
                    trigger="hover"
                >
                    <MoreOutlined />
                </LegoPopMenu>
            </div>
        </div>
    );
};

export default CollapseItem;
