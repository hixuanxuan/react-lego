/**
 * filename: List
 * overview: 用来存放下方 Card 列表的 List 组件
 */

import React, {
    CSSProperties,
    useCallback,
    createContext,
    useContext,
} from 'react';
import { useDrop } from 'react-dnd';
import Card from '@components/Card';
import { elementTypeMap } from '@components/Box';
import EditElementWrapper, {
    useEditState,
} from '@components/editElementWrapper';

const style: CSSProperties = {
    backgroundColor: 'white',
    border: '1px dashed gray',
    margin: '100px auto',
    minHeight: '300px',
    textAlign: 'center',
    overflowY: 'scroll',
    width: 300,
};

export interface IListProps {
    cardList: any[];
    changeCardList: (list: any[]) => void;
    handleSelect: (params: { id: string; editFields: string[] }) => void;
}
const getEditCom = (id: string, Com: React.FC<any> & { enable?: any }) => (
    <EditElementWrapper
      id={id}
      defaultProps={Com.defaultProps}
      enable={Com.enable}
    >
        <Com />
    </EditElementWrapper>
);
const ListContext = createContext(
    (params: { id: string; editFields: string[] }) => {},
);
export const useHandleSelect = () => useContext(ListContext);
const List: React.FC<IListProps> = ({
    cardList,
    changeCardList,
    handleSelect,
}) => {
    const [, drop] = useDrop({
        accept: ['card', 'item'],
    });

    const moveCard = useCallback(
        (dragIndex: number, hoverIndex: number) => {
            /**
             * 1、如果此时拖拽的组件是 Box 组件，则 dragIndex 为 undefined，则此时修改，则此时修改 cardList 中的占位元素的位置即可
             * 2、如果此时拖拽的组件是 Card 组件，则 dragIndex 不为 undefined，此时替换 dragIndex 和 hoverIndex 位置的元素即可
             */
            const newList = [...cardList];
            if (dragIndex === undefined) {
                const lessIndex = cardList.findIndex(
                    (item: any) => item.id === -1,
                );
                newList.splice(lessIndex, 1);
                newList.splice(hoverIndex, 0, {
                    bg: 'aqua',
                    category: '放这里',
                    id: -1,
                });
                changeCardList(newList);
            } else {
                const dragCard = cardList[dragIndex];
                newList.splice(dragIndex, 1);
                newList.splice(hoverIndex, 0, dragCard);
                changeCardList(newList);
            }
            // eslint-disable-next-line
        },
        [cardList],
    );
    return (
        <ListContext.Provider value={handleSelect}>
            <div style={style} ref={drop}>
                {cardList.length <= 0 ? (
                    <div style={{ lineHeight: '60px' }}>放入组件</div>
                ) : (
                    cardList.map((item: any, index: number) => (
                        <Card
                          index={index}
                          type={item.type}
                          containerType={item.containerType}
                          key={item.id}
                          handleSelect={() => {
                                handleSelect({
                                    id: item.id,
                                    editFields:
                                        elementTypeMap[item.elementType]
                                            .editFields,
                                });
                            }}
                          moveCard={moveCard}
                        >
                            {elementTypeMap[item.elementType]
                                && getEditCom(
                                    item.id,
                                    elementTypeMap[item.elementType],
                                )}
                        </Card>
                    ))
                )}
            </div>
        </ListContext.Provider>
    );
};

export default List;
