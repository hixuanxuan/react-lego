import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import cn from 'classnames';
import { elementTypeMap } from '@/components/Box';
import { EditElementWrapper } from '@/components';
import { useParams } from 'react-router';
import getData from '@hooks/useGetServerData';
import { useSelfReducer } from '@/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { usePageProvider } from '@/hooks/usePage';
import css from './index.module.less';

const style: CSSProperties = {
    backgroundColor: 'white',

};
interface PreviewProps {}
const getEditCom = (id: string, Com: React.FC<any>) => (
    <EditElementWrapper
      id={id}
      defaultProps={Com.defaultProps}
      enable={Com.enable}
      isEdit={false}
    >
        <Com />
    </EditElementWrapper>
);
const Client = (props: PreviewProps) => {
    const { pageId, projectId } = useParams();
    const [PageProvider, page] = usePageProvider(pageId);
    const state = useSelfReducer((state) => state[pageId]);
    const list = (state && state.list) || [];
    const dispatch = useDispatch();
    useEffect(
        () => {
            getData(projectId).then(
                (data) => {
                    dispatch({
                        type: 'reset_project_data',
                        data,
                    });
                },
            );
        },
        [pageId],
    );
    return (
        <PageProvider>
            <div className={css.inline} style={style}>
                {
                list.map((item: any, index: number) => (

                    elementTypeMap[item.elementType]
                        && getEditCom(item.id, elementTypeMap[item.elementType])
                ))
            }
            </div>
        </PageProvider>
    );
};

export default Client;
