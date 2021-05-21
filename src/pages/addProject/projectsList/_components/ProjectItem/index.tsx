import React from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import css from './index.module.less';

interface ProjectItemProps {
    name: string;
    cover: string | React.ReactElement;
    creatTime: string;
    id: string;
}
const ProjectItem = (props: ProjectItemProps) => {
    const {
 name, cover, creatTime, id, type,
} = props;
    const history = useHistory();
    const handleProClick = () => {
        window.editType = type;
        history.push(`/edit/${id}/tmp`);
    };
    const img = typeof cover === 'string' ? (
        <img src={cover} alt={name} />
    ) : (
        cover
    );
    return (
        <div onClick={handleProClick} className={css['project-item']}>
            <div className={css['project-cover']}>
                {
                    img || <img src={require('../../assets/cover-1@2x.png')} alt="" />
                }
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
