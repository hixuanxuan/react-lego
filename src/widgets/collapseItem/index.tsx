import React, { useState } from 'react';
import { MoreOutlined } from '@ant-design/icons';
import css from './index.module.less';
import cn from 'classnames';

interface CollapseItem {
    pageName: string;
    id: string | number;
}
const CollapseItem = (props: CollapseItem) => {
    const { pageName, id } = props;
    const [select, setselect] = useState(false);
    return (
        <div className={css.collapseItem}>
            <span>{pageName}</span>
            <div>
                <MoreOutlined />
            </div>
        </div>
    );
};

export default CollapseItem;
