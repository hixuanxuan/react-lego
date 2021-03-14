import React, { useCallback } from 'react';
import { Collapse, Popconfirm } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import css from './index.module.less';
import CollapseItem from '../collapseItem';
import { useSelfReducer } from '@/hooks';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
const { Panel } = Collapse;

interface PageCollapse {
    pages: object[];
}
const Header = () => {
    const dispatch = useDispatch();
    const handleAddClick = useCallback(() => {
        dispatch({
            type: 'create_page_data',
            key: uuid(),
            data: {
                pageName: '页面',
                list: [],
            },
        });
    }, []);
    return (
        <div className={css.title}>
            <span>页面</span>
            <div className={css.tools}>
                <Popconfirm
                    title="您确定要添加页面吗?"
                    onConfirm={handleAddClick}
                    okText="确定"
                    cancelText="取消"
                >
                    <PlusOutlined />
                </Popconfirm>
            </div>
        </div>
    );
};
const PageCollapse = (props: PageCollapse) => {
    const { pages } = props;
    const state = useSelfReducer((state) => state);
    const pageIds = Object.keys(state);
    return (
        <div className={css['page-collapse']}>
            <Collapse
                defaultActiveKey={['1']}
                bordered={false}
                ghost={true}
                expandIconPosition={'right'}
            >
                <Panel
                    header={<Header />}
                    key="1"
                    // extra={genExtra()}
                >
                    {pageIds.map((item) => (
                        <CollapseItem
                            pageName={state[item].pageName}
                            id={item}
                        />
                    ))}
                </Panel>
            </Collapse>
        </div>
    );
};

export default PageCollapse;
