import React, { useState, Fragment } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import css from './index.module.less';

const Demo = (props) => {
    const {
 value: src, onChange, id, aspect = 2, needCrop = true,
} = props;
    const defalut = [];
    if (src) {
        defalut.push({ url: src });
    }
    const [fileList, setFileList] = useState(defalut);
    const [count, setCount] = useState(defalut.length);

    const handleImageChange = ({ fileList: newFileList }) => {
        if (newFileList[0]?.status === 'done') {
            const { path } = newFileList[0].response;
            onChange(id, path);
            setFileList(newFileList);
            setCount(newFileList?.length);
        }
        console.log(newFileList);
    };
    // const onChange = ({ fileList: newFileList }) => {
    //     setFileList(newFileList);
    // };
    const handleImageRemove = () => {
        // 调接口删除么？
        onChange(id, '');
        setFileList([]);
        setCount(0);
    };

    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };
    const Com = needCrop ? ImgCrop : Fragment;
    return (
        <div className={css.wrapper}>
            <div className={css.title}>
                <p className={css.left}>添加图片</p>
                <p className={css.right}>
                    已选择
                    {count}
                    张
                </p>
            </div>
            <Com rotate aspect={aspect}>
                <Upload
                  action="/api/upload"
                  listType="picture-card"
                  fileList={fileList}
                  onChange={handleImageChange}
                  onPreview={onPreview}
                  onRemove={handleImageRemove}
                >
                    {fileList.length < 1 && '+ Upload'}
                </Upload>
            </Com>
        </div>
    );
};

export default Demo;
