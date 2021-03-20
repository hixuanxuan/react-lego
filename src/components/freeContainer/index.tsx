/**
 * filename: List
 * overview: 用来存放下方 Card 列表的 List 组件
 */

import React, { CSSProperties, useCallback, useState, useRef } from 'react';
import { useDrop } from 'react-dnd';
import Card from '@components/Card';
import { useHandleSelect } from '@components/ContentPanel';
import EditElementWrapper, {
    useEditState,
} from '@components/editElementWrapper';
import { elementTypeMap } from '@components/Box';
import css from './index.module.less';

const style: CSSProperties = {
    backgroundColor: 'white',
    padding: '0 10px',
    textAlign: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
};

export interface IListProps {
    cardList: any[];
    changeCardList: (list: any[]) => void;
    handleSelect: (params: { id: string; editFields: string[] }) => void;
}
const getEditCom = (id: string, Com: React.FC<any>) => (
    <EditElementWrapper id={id} defaultProps={Com.defaultProps} noBorder>
        <Com />
    </EditElementWrapper>
);
const FreeContainer: React.FC<IListProps> & {
    enable: any;
    defaultParams: any;
} = (props) => {
    const handleSelect = useHandleSelect();
    const ref = useRef<HTMLDivElement>(null);
    const [state, update] = useEditState();
    const [isHover, setHover] = useState(false);
    const [, drop] = useDrop({
        accept: 'item',
        hover: (item, monitor) => {
            console.log('FreeContainer-item', item, monitor);
        },
        drop: (item, monitor) => {
            console.log('dropppppp');
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            // 确定鼠标位置
            console.log(item.state);
            if (item.update) {
                const diff = monitor.getDifferenceFromInitialOffset();
                const offsetLeft = (item.state.current.left || 0) + diff.x; // - hoverBoundingRect.x;
                const offsetTop = (item.state.current.top || 0) + diff.y; // - hoverBoundingRect.y;
                console.log(diff, offsetLeft, offsetTop);
                item.update({
                    left: offsetLeft,
                    top: offsetTop,
                    position: 'absolute',
                });
            }
            return { update };
        },
    });

    const moveCard = useCallback((pos, update) => {
        console.log(pos);
        // eslint-disable-next-line
    }, []);
    drop(ref);
    return (
        <div
            className={css.content}
            style={{ ...style, background: isHover ? 'gray' : '' }}
            ref={ref}
        >
            {state.children
                ? state.children.map((item: any, index: number) => {
                      const Com = elementTypeMap[item.elementType];
                      return (
                          <EditElementWrapper
                              id={item.id}
                              defaultProps={Com.defaultProps}
                              needResize
                              noBorder
                          >
                              <Card
                                  index={index}
                                  type={item.type}
                                  containerType={item.containerType}
                                  key={item.id}
                                  handleSelect={(e: any) => {
                                      console.log(
                                          e,
                                          'handleSelect',
                                          item,
                                          Com.editFields,
                                          handleSelect,
                                      );

                                      handleSelect({
                                          id: item.id,
                                          editFields: Com.editFields,
                                      });
                                      console.log('ddd');
                                      e.stopPropagation();
                                  }}
                                  moveCard={moveCard}
                              >
                                  <Com />
                              </Card>
                          </EditElementWrapper>
                      );
                  })
                : ''}
        </div>
    );
};

FreeContainer.enable = {
    bottom: true,
};
FreeContainer.defaultProps = {
    width: '100%',
};
export default FreeContainer;
