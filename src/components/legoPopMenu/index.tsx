import React, { ReactNode } from 'react';
import { Popover, Button } from 'antd';
import css from './index.module.less';
import cn from 'classnames';

// 支持react Element？
interface MenuItem {
    id: number | string;
    label: number | string;
}
interface menuProps {
    menus: MenuItem[];
    handleClick: (id: string | number) => void;
    children: ReactNode;
    className?: string;
    trigger?: 'hover' | 'focus' | 'click' | 'contextMenu';
}
const Menus = ({
    menus,
    handleClick,
}: {
    menus: MenuItem[];
    handleClick: (id: string | number) => void;
}) => {
    return (
        <>
            {menus.map(({ id, label }: MenuItem) => (
                <div className={css.select} onClick={() => handleClick(id)}>
                    <span>{label}</span>
                </div>
            ))}
        </>
    );
};

const legoPopMenu = ({
    menus,
    handleClick,
    className,
    children,
    trigger = 'click',
}: menuProps) => {
    return (
        <Popover
            overlayClassName={cn(css.popMenu, className)}
            trigger={trigger}
            content={<Menus menus={menus} handleClick={handleClick} />}
            title={null}
            placement="bottom"
        >
            {children}
        </Popover>
    );
};

export default legoPopMenu;
