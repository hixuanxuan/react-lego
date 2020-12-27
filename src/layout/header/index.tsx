import React from 'react';
import { useParams } from 'react-router';
import css from './index.module.less';

const Header = () => {
    const params = useParams();
    console.log('render Header', params);
    return <div className={css.header}>header</div>;
};

export default Header;
