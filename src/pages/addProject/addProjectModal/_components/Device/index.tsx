import React, { useContext } from 'react';
import cn from 'classnames';

import css from './index.module.less';
import Context from '../../Context';

const Device = (props: DeviceProps) => {
    const { value, setValue } = useContext(Context);
    const { icon, name, size, custom } = props;

    const handleClick = () => {
        setValue(props);
    };

    const DeviceClassName = cn({
        'is-active': value.name === name,
        [`${css.type}`]: true,
    });
    return (
        <div className={DeviceClassName} onClick={handleClick} aria-hidden>
            <div className={css.iconbox}>
                <i className={css.icon}>{icon}</i>
            </div>
            {name && <div className={css.typename}>{name}</div>}

            {!custom ? (
                <div className={css.size}>{size}</div>
            ) : (
                <div className={css.custom}>
                    <input
                        type="number"
                        className={css.input}
                        placeholder="宽度"
                    />
                    x
                    <input
                        type="number"
                        className={css.input}
                        placeholder="高度"
                    />
                </div>
            )}
        </div>
    );
};

export interface DeviceProps {
    icon: React.ReactElement;
    name?: string;
    size?: string;
    custom?: boolean;
    type?: string;
}
export default Device;
