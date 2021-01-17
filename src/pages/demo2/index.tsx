import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import EditElementWrapper from '../../components/editElementWrapper';

const { id, mod } = process.env;
function APP() {
    return mod === 'edit' ? editRouter : previewRoter;
}
const editRouter = (
    <BrowserRouter basename={'/edit'}>
        <Route />
    </BrowserRouter>
);
// const { data } = reqRouters();

const previewRoter = () => {};
const App: React.FC<{}> = (props) => {
    const [data, setData] = useState<number>(1);
    const aaa = useSelector((state) => state);
    console.log('2', aaa, props);
    return (
        // <BrowserRouter basename={`/preview/${id}`}>
        //     <Route />
        // </BrowserRouter>
        <>
            <div className="aaa">{data}</div>
            <EditElementWrapper>
                <div className="test">可编辑</div>
            </EditElementWrapper>
            <button
                type="button"
                onClick={() => setData((preCount) => preCount + 1)}
            >
                click
            </button>
        </>
    );
};

// const App: React.FC<{}> = () => {
//     const [data, setData] = useState<number>(1);
//     const aaa = useSelector((state) => state);
//     console.log(aaa);
//     return (
//         <>
//             <div className="aaa">{data}</div>
//             <button
//                 type="button"
//                 onClick={() => setData((preCount) => preCount + 1)}
//             >
//                 click
//             </button>
//         </>
//     );
// };

export default App;
