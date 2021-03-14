import React from 'react';
import { SketchPicker } from 'react-color';
import { Popover } from 'antd';
import Color from 'color';
import isColor from 'is-color';
import css from './index.module.less';

interface ColorPickerProps {
    defaultColor?: string;
    onChange?: (color: ColorType) => void;
}

interface ColorType {
    rgb: { hex: string; rgb: { r: number; g: number; b: number; a: number } };
    hex: string;
}
const ColorPicker = (props: ColorPickerProps) => {
    const { defaultColor, onChange, id } = props;
    const defaultRBGA = Color(defaultColor).object();
    const [color, setColor] = React.useState({
        rgb: {
            r: defaultRBGA.r,
            g: defaultRBGA.g,
            b: defaultRBGA.b,
            a: defaultRBGA.alpha,
        },
    });
    const [hexValue, setHexValue] = React.useState(defaultColor);

    const [opacity, setOpacity] = React.useState(1);
    const handleChange = (newColor: any) => {
        const { hex, rgb } = newColor;
        setColor({ rgb });
        setHexValue(hex);
        setOpacity(rgb.a);
        onChange(id, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`);
    };
    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setHexValue(value);
        if (isColor(value)) {
            const { r, g, b, alpha } = Color(value).object();
            setColor({
                rgb: {
                    r,
                    g,
                    b,
                    a: alpha || 1,
                },
            });
            onChange(id, `rgba(${r}, ${g}, ${b}, ${alpha})`);
        }
    };

    const hanldeOpacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const { rgb } = color;
        setColor({
            rgb: {
                ...rgb,
                a: value,
            },
        });
        setOpacity(value);
        onChange(id, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${value})`);
    };

    return (
        <div className={css['color-picker-container']}>
            <div className={css['color-picker-value']}>
                <div className={css['color-picker-label']}>颜色</div>
                <div className={`${css['color-picker-input-wrap']}`}>
                    <Popover
                        content={
                            <SketchPicker
                                color={color.rgb}
                                onChange={handleChange}
                            />
                        }
                        overlayClassName={css.popover}
                        trigger="click"
                    >
                        <i
                            className={css['color-picker-box']}
                            style={{
                                background: `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`,
                            }}
                        />
                    </Popover>
                    <input
                        type="text"
                        className={css['color-picker-input']}
                        value={hexValue}
                        onChange={handleValueChange}
                    />
                </div>
            </div>

            <div className={css['color-picker-opacity']}>
                <div className={css['color-picker-label']}>不透明度</div>
                <div className={`${css['color-picker-input-wrap']}`}>
                    <input
                        type="number"
                        className={css['color-picker-input']}
                        value={opacity}
                        onChange={hanldeOpacityChange}
                    />
                </div>
            </div>
        </div>
    );
};
ColorPicker.defaultProps = {
    defaultColor: '#333',
    onChange: (color: ColorType) => {},
};
export default ColorPicker;
