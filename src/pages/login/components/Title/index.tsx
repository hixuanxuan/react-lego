import React, { ReactChild } from 'react';
import style from './index.module.less';

interface TitleProps{
    children:ReactChild
}
const Title = ({ children }:TitleProps) => (<div className={style.title}>{children}</div>);

export default Title;
