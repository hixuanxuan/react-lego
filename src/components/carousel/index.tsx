import React, {useState} from 'react';
import cn from 'classnames';
import css from './index.module.less';
import { Carousel } from 'antd';
import { useEditState } from '../editElementWrapper';
interface CarouselComProps {}

const CarouselCom = (props: CarouselProps) => {
    const [state] = useEditState();
    const [minHeight, setMinHeight] = useState('auto');
    return (
        <Carousel className={css.carousel} autoplay>
            {state.banners.map((item) => (
                <img key={item.src} src={item.src} onLoad={(e) => {
                    const {height} = e.target;
                    if (height > minHeight) {
                        setMinHeight(height);
                    }
                }} alt="" />
            ))}
        </Carousel>
    );
};
CarouselCom.defaultProps = {
    banners: [
        {
            src:
                'http://19446153.s61i.faiusr.com/2/AD0IifOiCRACGAAg6_zU5gUowsiZ_AQw7gU46AI!900x900.jpg.webp',
        },
        {
            src: 'http://19446153.s61i.faiusr.com/2/AD0IifOiCRACGAAg6_zU5gUoqJOuhwEw7gU46AI!900x900.jpg.webp'
        }
    ],
};
CarouselCom.editFields = ['banner']
export default CarouselCom;
