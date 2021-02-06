import React from 'react';
import { Collapse } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import css from './index.module.less';
import CollapseItem from '../collapseItem';

const { Panel } = Collapse;

interface PageCollapse {
    pages: object[];
}
const Header = () => {
    return (
        <div className={css.title}>
            <span>页面</span>
            <div className={css.tools}>
                <PlusOutlined />
            </div>
        </div>
    );
};
const PageCollapse = (props: PageCollapse) => {
    const { pages } = props;
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
                    <CollapseItem pageName={'111'} id={1} />
                    <CollapseItem pageName={'111'} id={1} />
                    <CollapseItem pageName={'111'} id={1} />
                </Panel>
            </Collapse>
        </div>
    );
};

export default PageCollapse;
