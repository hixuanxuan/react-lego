import React from 'react';
import { v4 as uuid } from 'uuid';
import css from './index.module.less';
import ProejctItem from './_components/ProjectItem';
import Empty from './_components/empty';
interface ProjectItemProps {
    name: string;
    cover: string | React.ReactElement;
    creatTime: string;
    id: string;
}
// const ProjectsDate: any = [];

// const ProjectsDate: any = [
//     {
//         id: uuid(),
//         name: '移动端H5',
//         creatTime: '2012-12-21',
//         cover: require('./assets/cover-1@2x.png'),
//     },
//     {
//         id: uuid(),
//         name: '移动端H5',
//         creatTime: '2012-12-21',
//         cover: require('./assets/cover-2@2x.png'),
//     },
//     {
//         id: uuid(),
//         name: '移动端H5',
//         creatTime: '2012-12-21',
//         cover: require('./assets/cover-3@2x.png'),
//     },
//     {
//         id: uuid(),

//         name: '移动端H5',
//         creatTime: '2012-12-21',
//         cover: require('./assets/cover-4@2x.png'),
//     },
// ];
interface ProjectsInterface {
    setVisible: (vi: boolean) => void;
    ProjectsDate: ProjectItemProps[];
}
const Projects = ({ setVisible, ProjectsDate }: ProjectsInterface) => {
    console.log('ss');

    return (
        <div className={css.projects}>
            <div className={css.title}>全部项目</div>
            <div className={css.wrapper}>
                <div
                    className={`${css.container} ${
                        ProjectsDate.length <= 0 && css['is-empty']
                    }`}
                >
                    {ProjectsDate.length <= 0 ? (
                        <Empty setVisible={setVisible} />
                    ) : (
                        ProjectsDate.map((project) => {
                            const { name, creatTime, cover, id } = project;
                            return (
                                <ProejctItem
                                    key={id}
                                    {...{ name, creatTime, cover, id }}
                                />
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
};

export default Projects;
