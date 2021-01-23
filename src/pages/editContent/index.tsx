import React, { useState, useEffect } from 'react';
import { useSelfReducer } from '@hooks';
import { usePageProvider } from '@hooks/usePage';
import EditElementWrapper, {
    useEditState,
} from '@components/editElementWrapper';
import css from './index.module.less';
// const { id, mod } = process.env;
// function APP() {
//     return mod === 'edit' ? editRouter : previewRoter;
// }
// const { data } = reqRouters();
console.log(useEditState);
function Demo() {
    const [{ background = 'black' }, updater] = useEditState();
    return (
        <div className={css.test} style={{ background }}>
            颜色可编辑：
            <input
                type="text"
                onBlur={(e) => updater({ background: e.target.value })}
            />
        </div>
    );
}

const App: React.FC<{}> = (props) => {
    const [data, setData] = useState<number>(1);
    const [PageProvider, page] = usePageProvider();
    const state = useSelfReducer((state) => state.get(page));
    return (
        <PageProvider>
            <div className="aaa">{data}</div>
            <EditElementWrapper id={'demo'}>
                <Demo />
            </EditElementWrapper>
            <button
                type="button"
                onClick={() => setData((preCount) => preCount + 1)}
            >
                click
            </button>
        </PageProvider>
    );
};

export default App;
