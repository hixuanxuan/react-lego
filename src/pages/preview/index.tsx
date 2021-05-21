import React from 'react';
import { elementTypeMap } from '@/components/Box';
import { EditElementWrapper } from '@/components';
import cn from 'classnames';
import css from './index.module.less';

const style: CSSProperties = {
    backgroundColor: 'white',

};
interface PreviewProps {}
const getEditCom = (id: string, Com: React.FC<any>) => (
    <EditElementWrapper
      id={id}
      enable={Com.enable}
      isEdit={false}
    >
        <Com />
    </EditElementWrapper>
);
const Preview = (props: PreviewProps) => {
    const { cardList, type } = props;
    return (
        <div className={cn(css.wrapper, css[type])}>
            <div className={css.inline} style={style}>
                {
                cardList.map((item: any, index: number) => (

                    elementTypeMap[item.elementType]
                        && getEditCom(item.id, elementTypeMap[item.elementType])
                ))
            }
            </div>
        </div>
    );
};

export default Preview;
