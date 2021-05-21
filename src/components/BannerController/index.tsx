import React, {useState} from 'react';
import cn from 'classnames';
import css from './index.module.less';
import {Table, Modal, Form, Input, Button, message, Upload} from 'antd';
import {ArrowDownOutlined, DeleteOutlined, EditOutlined, ArrowUpOutlined, PlusOutlined} from '@ant-design/icons';
import { useEditState } from '../editElementWrapper';
import Item from 'antd/lib/list/Item';
interface BannerControllerProps {};


const Edit = ({link, onChange, src}) => {
    const [stateSrc, setSrc] = useState(src);
    const [value, setVal] = useState(link);
    const handleLinkChange = () => {
        onChange('link', value);
        message.success('设置成功');
    }
    const handleImageChange = ({
        file
    }) => {
        if (file.status === 'done') {
            const {path} = file.response;
            onChange('src', path);
            setSrc(path);
        }
    }
    return (
        <>
            <div className={css.relative}>
                <Upload
                    accept="image/*"
                    action="/api/upload"
                    onChange={handleImageChange}
                    itemRender={() => ''}
                >
                    <img  style={{width: 350, cursor: 'pointer', marginBottom: 20}} src={stateSrc} alt=""/>
                    <div className={css.changeImg}>更换图片</div>
                </Upload>
            </div>
            
            <div style={{display: 'flex'}}>
                <Form.Item name="链接地址" label="链接地址">
                    <Input value={value} onChange={(e) => {setVal(e.target.value)}} />
                </Form.Item>
                <Button onClick={handleLinkChange} style={{marginLeft: 20}} type="primary">设置链接</Button>
            </div>
        </>

    );
}
const BannerController = (props: BannerControllerProps) => {
    const {value: banners, onChange, id} = props;
    const columns = [
        {
          title: '图片',
          width: 80,
          dataIndex: 'src',
          render: (src) => {
              return <img src={src} height={28} alt=""/>
          }
        },
        {
          title: '链接',
          width: 80,
          dataIndex: 'link',
          render: (src) => {
              return src || '无';
          }
        },
        {
          title: '排序',
          width: 80,
          dataIndex: 'address',
          render: (text: any, item, idx) => {
              const up = () => {
                const newBanner = [...banners];
                newBanner.splice(idx, 1);
                newBanner.splice(idx - 1, 0, item);
                onChange(id, newBanner)
              }
              const down = () => {
                const newBanner = [...banners];
                newBanner.splice(idx, 1);
                newBanner.splice(idx + 1, 0, item);
                onChange(id, newBanner)
              }
              return idx > 0 ? <ArrowUpOutlined onClick={up} /> : <ArrowDownOutlined onClick={down} />;
          }
        },
        {
            title: '操作',
            width: 80,
            dataIndex: 'oprate',
            render: (_, item, idx) => {
                let link = item.link;
                const handleChange = (key, value) => {
                    const newBanner = [...banners];
                    newBanner.splice(idx, 1, {...item, ...{[key]: value}})
                    onChange(id, newBanner)
                }
                const handleEdit = () => {
                    Modal.confirm(
                        {
                            title: '编辑',
                            icon: '',
                            content: (
                                <Edit link={link} onChange={handleChange} src={item.src} />
                            )
                        }
                    );
                }
                const remove = () => {
                    const newBanner = [...banners];
                    newBanner.splice(idx, 1)
                    onChange(id, newBanner);
                }
                return (
                    <>
                        <EditOutlined onClick={handleEdit} style={{cursor: 'pointer'}}/>
                        &nbsp;
                        <DeleteOutlined onClick={remove} style={{cursor: 'pointer'}}/>
                    </>
                );
            }
        }
    ];
    const handleImageChange = ({
        file
    }) => {
        if (file.status === 'done') {
            const {path} = file.response;
            onChange(id, [...banners, {
                src: path
            }]);
        }
    }
    return (
        <>
            <Table columns={columns} dataSource={banners} pagination={false} />
            <div className={css.addone}>
                <Upload
                    accept="image/*"
                    action="/api/upload"
                    onChange={handleImageChange}
                    itemRender={() => ''}
                >
                    <PlusOutlined />添加横幅
                </Upload>
            </div>
        </>
    );
};

export default BannerController;
