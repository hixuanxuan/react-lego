import React from 'react';
import classnames from 'classnames';
import style from './index.module.less';

interface ButtonProps {
    children: React.ReactChild;
    type: 'primary';
    htmlType?: 'button' | 'submit' | 'reset';
}
const Button = ({
    children,
    htmlType = 'button',
    type = 'primary',
}: ButtonProps) => {
    // const { children } = props;
    const className = classnames({
        [`${style.button}`]: true,
        [`${style[type]}`]: true,
    });
    return (
        // eslint-disable-next-line react/button-has-type
        <button type={htmlType} className={className}>
            {children}
        </button>
    );
};
Button.defaultProps = {
    htmlType: 'button',
};
export default Button;
