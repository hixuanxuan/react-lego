import React, { useEffect, useState } from 'react';
import css from './index.module.less';
import AddproSvg from '@imgs/svg/addpro.svg';
import AllproSvg from '@imgs/svg/icon-project.svg';
import AddprojectModal from './addProjectModal';
import cn from 'classnames';
import ProjectList from './projectsList';
import request from '@utils/request';
import { message } from 'antd';

interface cachetype {
    menuList: any;
    setVisible: (vi: boolean) => void;
}
interface ProjectItemProps {
    name: string;
    cover: string | React.ReactElement;
    creatTime: string;
    id: string;
}
interface menuType {
    icon: React.ReactElement;
    text: string;
    active: boolean;
    onClick: () => void;
}
const cache: cachetype = {} as cachetype;
const coverMap = {
    h5: require('./projectsList/assets/cover-1@2x.png'),
    pc: require('./projectsList/assets/cover-2@2x.png'),
    diy: require('./projectsList/assets/cover-3@2x.png'),
};
const menuList = (setVisible: (vi: boolean) => void): menuType[] => {
    if (cache.setVisible === setVisible) {
        return cache.menuList;
    } else {
        const menuList: menuType[] = [
            {
                icon: <AllproSvg />,
                text: '全部项目',
                active: true,
                onClick: () => {},
            },
            {
                icon: <AddproSvg />,
                text: '新建项目',
                active: false,
                onClick: () => {
                    setVisible(true);
                },
            },
        ];
        cache.menuList = menuList;
        cache.setVisible = setVisible;
        return menuList;
    }
};
interface ProDataType {
    created_at: string;
    projectId: string;
    projectName: string;
    projectType: 'h5' | 'pc' | 'diy';
}
const formatData = (data: ProDataType) => {
    const { created_at, projectId, projectName, projectType } = data;
    const newData: ProjectItemProps = {} as ProjectItemProps;
    newData.creatTime = created_at;
    newData.id = projectId;
    newData.name = projectName;
    newData.cover = coverMap[projectType];
    return newData;
};
const addProject = () => {
    const [visible, setvisible] = useState(false);
    const list = menuList(setvisible);
    const [prodata, setprodata] = useState<ProjectItemProps[]>([]);
    const getProdata = () => {
        request.post('/api/getProjects').then((res) => {
            console.log(res);
            if (+res.code === 0) {
                const { data = {} } = res;
                const { projects = [] } = data;
                const pro = [];
                for (let item of projects) {
                    pro.push(formatData(item));
                }
                setprodata(pro);
            } else {
                message.error('服务异常');
            }
        });
    };
    useEffect(() => {
        // 请求接口获取项目列表
        getProdata();
    }, []);

    const handleOk = (value, name) => {
        console.log(value, name);
        console.log('在这请求');
        const type = !value.type ? 'h5' : value.type;
        return request
            .post('/api/createProject', { name, type })
            .then((res) => {
                if (+res.code === 0) {
                    getProdata();
                    return Promise.resolve(false);
                } else {
                    message.error('服务异常');
                    return Promise.resolve(true);
                }
            });
    };
    return (
        <div className={css.wrapper}>
            <ul className={css.list}>
                {list.map(({ icon, text, onClick, active }) => (
                    <li
                        className={cn(css.item, { [css.active]: active })}
                        onClick={onClick}
                    >
                        {icon}
                        <span className={css.text}>{text}</span>
                    </li>
                ))}
            </ul>
            <div className={css.content}>
                <ProjectList ProjectsDate={prodata} setVisible={setvisible} />
            </div>

            <AddprojectModal
                handleOk={handleOk}
                visible={visible}
                setVisible={setvisible}
            />
        </div>
    );
};
export default addProject;
