import React from 'react';

import css from './index.module.less';
import EmptySVG from '../../assets/img-empty.svg';
import Button from '../Button';
interface EmptyInterface {
    setVisible: (vi: boolean) => void;
}
const Empty: React.FC<EmptyInterface> = ({ setVisible }) => {
    return (
        <div className={css.empty}>
            <EmptySVG />
            <div className={css.des}>这里什么也没有哦，去创建项目吧～</div>
            <Button onClick={() => setVisible(true)} type="primary">
                创建项目
            </Button>
        </div>
    );
};

export default Empty;
