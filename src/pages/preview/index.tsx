import React from 'react';
import { Modal } from 'antd';
import cn from 'classnames';
import { elementTypeMap } from '@/components/Box';
import { EditElementWrapper } from '@/components';
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
    const { cardList } = props;
    return (
        <div className={css.wrapper}>
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
