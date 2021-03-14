import React from 'react';
import classnames from 'classnames';
import css from './index.module.less';

interface ButtonProps {
    children: React.ReactChild;
    type: 'primary';
    onClick?: React.ReactEventHandler;
    htmlType?: 'button' | 'submit' | 'reset';
    width?: number | string;
}
const Button = ({
    children,
    htmlType = 'button',
    type = 'primary',
    width = 100,
    onClick,
}: ButtonProps) => {
    // const { children } = props;
    const className = classnames({
        [`${css.button}`]: true,
        [`${css[type]}`]: true,
    });
    const inlinecss = {
        width: typeof width === 'number' ? `${width}px` : width,
    };
    return (
        // eslint-disable-next-line react/button-has-type
        <button
            type={htmlType}
            className={className}
            css={inlinecss}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
Button.defaultProps = {
    htmlType: 'button',
    width: '100%',
    onClick: () => {},
};
export default Button;
