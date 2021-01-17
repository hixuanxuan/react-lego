import React from 'react';
import { useParams } from 'react-router';
import css from './index.module.less';
import legoSvg from '../../static/imgs/legoSvg';

const Header = () => {
    const params = useParams();
    console.log('render Header', params);
    return (
        <div className={css['wrapper']}>
            <div className={css['left-fix']}>
                <img src={legoSvg} />
            </div>
            <div className={css['right-fix']}>
                <img />
            </div>
        </div>
    );
};

export default Header;
