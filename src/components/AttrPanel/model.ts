import InputBlock from '../InputBlock';
import InputText from '../InputText';
import LinkInput from '../LinkInput';
import BannerController from '../BannerController';
import Upload from '@components/upload';
import Colorpicker from '@components/ColorPicker';
import ProgressCount from '@components/ProgressCount';
export default {
    width: {
        group: 'w-h',
        Component: InputBlock,
        valueKey: 'width',
        props: {
            unit: 'W',
            id: 'width',
        },
    },
    height: {
        group: 'w-h',
        Component: InputBlock,
        valueKey: 'height',
        props: {
            unit: 'H',
            id: 'height',
        },
    },
    text: {
        group: 'text',
        Component: InputText,
        valueKey: 'text',
        props: {
            id: 'text',
            title: '文本',
            placeholder: '请输入文字',
        },
    },
    link: {
        group: 'link',
        Component: LinkInput,
        valueKey: 'link',
        props: {
            id: 'link',
            title: '链接',
            placeholder: '请输入跳转链接',
        },
    },
    banner: {
        group: 'banner',
        Component: BannerController,
        valueKey: 'banners',
        props: {
            id: 'banners',
        },
    },
    upload: {
        group: 'upload',
        Component: Upload,
        valueKey: 'src',
        props: {
            id: 'src',
        },
    },
    upload2: {
        group: 'upload',
        Component: Upload,
        valueKey: 'src',
        props: {
            id: 'src',
            aspect: 1,
        },
    },
    color: {
        group: 'color',
        Component: Colorpicker,
        valueKey: 'color',
        props: {
            id: 'color',
        },
    },
    size: {
        group: 'size',
        Component: ProgressCount,
        valueKey: 'size',
        props: {
            id: 'size',
            title: '图标大小',
            min: 40,
            max: 100,
        },
    },
    count: {
        group: 'count',
        Component: ProgressCount,
        valueKey: 'count',
        props: {
            id: 'count',
            title: '个数',
            min: 1,
            max: 20,
        },
    },
    fontSize: {
        group: 'fontSize',
        Component: ProgressCount,
        valueKey: 'fontSize',
        props: {
            id: 'fontSize',
            title: '字体大小',
            min: 12,
            max: 40,
        },
    },
    nocropUpload: {
        group: 'upload',
        Component: Upload,
        valueKey: 'src',
        props: {
            id: 'src',
            needCrop: false,
        },
    },
};
