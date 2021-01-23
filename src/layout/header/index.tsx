import React from 'react';
import { useParams } from 'react-router';
import LegoSvg from '@imgs/lego.svg';
import css from './index.module.less';

// console.log(legoSvg);

const Header = () => {
    const params = useParams();
    console.log('render Header', params);
    return (
        <div className={css.wrappers}>
            <div className={css['left-fix']}>
                {/* <img src={legoSvg} /> */}
                <LegoSvg />
            </div>
            <div className={css['right-fix']}>{/* <img /> */}</div>
        </div>
    );
};

export default Header;
