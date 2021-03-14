import { produce } from 'immer';
import undoable from 'redux-undo';

const defaultState: any = {
    '1111-2222-333': {
        pageName: '默认页面',
        list: [],
    },
};
function reducer(prev = defaultState, action: any) {
    return produce(prev, (state: any) => {
        const { type } = action;
        switch (type) {
            case 'reset_project_data': {
                console.log('------------>reset_project_data');
                const { data } = action;
                return data;
            }
            case 'create_page_data': {
                const { key, data } = action;
                state[key] = data;
                break;
            }
            case 'delete_page_data': {
                const { key } = action;
                delete state[key];
                break;
            }
            case 'init_section': {
                const { page, id, data } = action;
                console.log('------------>initSection', page);
                state[page][id] = data;
                break;
            }
            case 'update_page_name':
                const { pageName, page } = action;
                state[page].pageName = pageName;
                break;
            case 'update_section': {
                // 修改组件属性
                const { page, id, data } = action;
                if (data.children) {
                    const prevChildren = prev[page][id].children || [];
                    data.children = [...prevChildren, ...data.children];
                }
                state[page][id] = { ...prev[page][id], ...data };
                break;
            }
            case 'update_list': {
                const { page, data } = action;
                state[page].list = data;
                break;
            }
            default:
                return state;
        }
    });
}
export default undoable(reducer);
// redux里的数据结构
// {
//     pageid (symbol): {
//         id('xxx-uuid'): {
//             ...props
//         }
//         list: [
//             ...components
//         ]
//          pageName: 'xxx'
//     }
// }

// 添加页面的操作，symbol pageid，
// state[id] = {
//     pageName: 'xxxx'
// };
// 删除页面的操作
// delete state.pageId
// 添加组件的操作 需要dispatch的参数有pageid，组件，组件id以及对应的属性
// state.pageid.comid.xxx = xxx;
// state.pageid.list.push(组件)
//

// 删除组件的操作
// {
//     id: {
//         pageName: '',
//             list: [],
//             comid: {

//         },
//         comsid: { }
//     }
// }
// 属性
