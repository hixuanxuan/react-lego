import React from 'react';
import { useParams } from 'react-router';
import LegoSvg from '@imgs/lego.svg';
import NoticeSvg from '@imgs/notification.svg';
import { Badge, Avatar, Image } from 'antd';
import cn from 'classnames';
import css from './index.module.less';

// console.log(legoSvg);
interface HeaderType {
    showHeader: boolean;
}
const Header: React.FC<HeaderType> = ({ showHeader = true }) => {
    const params = useParams();
    console.log('render Header', params);
    return (
        <div className={cn(css.wrappers, { [css.hide]: !showHeader })}>
            <div className={css['left-fix']}>
                {/* <img src={LegoSvg} /> */}
                <LegoSvg />
                <span className={css.legotext}>楽高</span>
                <span className={css.legotext}>Legao</span>
            </div>
            <div className={css['right-fix']}>
                <div>
                    <Badge count={5} size="small" offset={[-3, 5]}>
                        <div className={css.notice}>
                            <NoticeSvg />
                        </div>
                    </Badge>
                </div>
                <div className={css.avatar}>
                    <Avatar
                        size={40}
                        src={
                            <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
