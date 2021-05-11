import React from 'react';
import { MoreOutlined } from '@ant-design/icons';
import css from './index.module.less';
import { useHistory } from 'react-router-dom';

interface ProjectItemProps {
    name: string;
    cover: string | React.ReactElement;
    creatTime: string;
    id: string;
}
const ProjectItem = (props: ProjectItemProps) => {
    const { name, cover, creatTime, id } = props;
    const history = useHistory();
    const handleProClick = () => {
        history.push(`/edit/${id}/tmp`);
    };
    return (
        <div onClick={handleProClick} className={css['project-item']}>
            <div className={css['project-cover']}>
                {typeof cover === 'string' ? (
                    <img src={cover} alt={name} />
                ) : (
                    cover
                )}
            </div>
            <div className={css['project-name']}>{name}</div>
            <div className={css['project-info']}>
                <div className={css['project-time']}>{creatTime}</div>
                <div className={css['project-more']}>
                    <MoreOutlined />
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
