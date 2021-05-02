import React, {
    useState,
    useEffect,
    memo,
    useCallback,
    Suspense,
    useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSelfReducer } from '@hooks';
import { usePageProvider } from '@hooks/usePage';
import { useEditState } from '@components/editElementWrapper';
import PageCollapse from '@/widgets/pageCollapse';
import AttrPanel from '@components/AttrPanel';
import ContentPanel from '@/components/ContentPanel';
import { Modal, Button, Spin, Popover, message } from 'antd';
import getSevereData from '@/hooks/useGetServerData';
import useSaveData from '@/hooks/useSaveData';
import wrapPromise from '@/utils/wrapPromise';
import { useHistory, useParams } from 'react-router';
import { v4 as uuid } from 'uuid';
import PreviewSvg from '@imgs/svg/preview.svg';
import ExportSvg from '@imgs/svg/export.svg';
import WithdrawSvg from '@imgs/svg/withdraw.svg';
import css from './index.module.less';
import ComsPanel from './comsPanel';
import request from '@utils/request';
import downloadFile from '@utils/downloadFile';
import Preview from '../preview';
import { CloseOutlined } from '@ant-design/icons';
import { ActionCreators } from 'redux-undo';

// const { id, mod } = process.env;
// function APP() {
//     return mod === 'edit' ? editRouter : previewRoter;
// }
// const { data } = reqRouters();
console.log(useEditState);
const flag = true;

const App: React.FC<{}> = () => {
    const [currentSection, selectSection] = useState({
        id: '',
        editFields: [],
    });
    console.log('currentSection', currentSection);
    const params = useParams<{ uid: string; pro: string }>();
    useSaveData(params.pro);
    const [visible, setVisible] = useState(false);
    const [exportVisible, setExportVisible] = useState(false);
    const [PageProvider, page] = usePageProvider(params.uid);
    const dispatch = useDispatch();
    console.log(useSelector((state) => state));
    const state = useSelfReducer((state) => state[page]);
    const list = (state && state.list) || [];
    const changeCardList = useCallback(
        (newList) => {
            dispatch({
                type: 'update_list',
                page,
                data: newList,
            });
        },
        [dispatch, page],
    );
    const handleOnChange = (...arg: any) => {
        console.log(arg);
    };
    const handleExportClick = () => {
        // 导出数据
        const modal = Modal.confirm({
            title: '提示',
            icon: null,
            content: (
                <div>
                    请选择导出数据的方式，支持两种导出方式，在线云导出和产出导出哦
                    <CloseOutlined
                        onClick={() => modal.destroy()}
                        className={css.close}
                    />
                </div>
            ),
            okText: '在线云导出',
            cancelText: '导出产出',
            onOk: () => {
                window.open(
                    `http://49.234.70.125:8001/client/${params.pro}/${params.uid}`,
                );
            },
            onCancel: () => {
                console.log('params.uid', params.uid);
                return request
                    .post('/api/exportData', { id: params.pro })
                    .then((res) => {
                        if (res.code === 0) {
                            // 下载安装包
                            downloadFile(res.path, '乐高可视化搭建平台产出');
                            Notification.requestPermission(function (status) {
                                console.log(status); // 仅当值为 "granted" 时显示通知
                                var n = new Notification('提示', {
                                    icon: require('@imgs/logo.lego.png'),
                                    body: '文件开始下载了~',
                                }); // 显示通知
                            });
                        } else {
                            message.error('请求失败，请稍后再试');
                        }
                    });
            },
        });
    };
    // 回退
    const handleWithdraw = () => {
        console.log(11111);
        dispatch(ActionCreators.undo());
    };
    return (
        <PageProvider>
            <div className={css.leftWrapper}>
                <PageCollapse />
                <ComsPanel />
            </div>
            <ContentPanel
                cardList={list}
                changeCardList={changeCardList}
                handleSelect={selectSection}
            />
            <AttrPanel {...currentSection} selectSection={selectSection} />
            {/* <DragDemo>
               {getEditCom('demo', Demo)}
            </DragDemo> */}
            <div className={css.tools}>
                <Popover content={<>点击预览效果哦～</>} title={null}>
                    <div className={css.item} onClick={() => setVisible(true)}>
                        <PreviewSvg />
                    </div>
                </Popover>
                <Popover content={<>导出项目</>} title={null}>
                    {/* <a
                      className={css.item}
                      href={`http://49.234.70.125:8001/client/${params.pro}/${params.uid}`}
                      target="_blank"
                    > */}
                    <div className={css.item} onClick={handleExportClick}>
                        <ExportSvg />
                    </div>
                    {/* </a> */}
                </Popover>
                <Popover content={<>点击回退上一步</>} title={null}>
                    {/* <a
                      className={css.item}
                      href={`http://49.234.70.125:8001/client/${params.pro}/${params.uid}`}
                      target="_blank"
                    > */}
                    <div className={css.item} onClick={handleWithdraw}>
                        <WithdrawSvg />
                    </div>
                    {/* </a> */}
                </Popover>
            </div>

            <Modal
                className={css.modal}
                visible={visible}
                footer={null}
                maskClosable
                onCancel={() => setVisible(false)}
            >
                <Preview cardList={list} />
            </Modal>
        </PageProvider>
    );
};

const ResetRedux = ({ getData, children }) => {
    const params = useParams<{ pro: string; uid: string }>();
    const history = useHistory();
    const initialData = getData();
    const dispatch = useDispatch();
    useMemo(() => {
        if (!initialData) {
            const pageId = uuid();
            dispatch({
                type: 'reset_project_data',
                data: {
                    [pageId]: {
                        pageName: '默认页面',
                        list: [],
                    },
                },
            });
            history.replace(`/edit/${params.pro}/${pageId}`);
            return;
        }
        if (!params.uid || params.uid === 'tmp') {
            const pageId = Object.keys(initialData)[0];
            history.replace(`/edit/${params.pro}/${pageId}`);
        }
        dispatch({
            type: 'reset_project_data',
            data: initialData,
        });
    }, []);
    return children;
};
const ProjectWrapper = memo(({ id }) => {
    const [getData] = useState(wrapPromise(getSevereData(id)));
    return (
        <Suspense fallback={<Spin />}>
            <ResetRedux getData={getData.read}>
                <App />
            </ResetRedux>
        </Suspense>
    );
});
const ParamsWrapper = () => {
    const params = useParams<{ pro: string }>();
    console.log(params.pro);
    return <ProjectWrapper id={params.pro} />;
};

export default memo(ParamsWrapper);
