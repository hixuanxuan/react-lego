import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { usePageProvider } from '@hooks/usePage';
import EditElementWrapper from '@components/editElementWrapper';

const App: React.FC<{}> = (props) => {
    const [data, setData] = useState<number>(1);
    const PageProvide = usePageProvider();
    const aaa = useSelector(state => state);
    console.log(props, aaa);
    return (
        <PageProvide>
            <div className="aaa">{data}</div>
            <EditElementWrapper>
                <div className="test">可编辑</div>
            </EditElementWrapper>
            <button type="button" onClick={() => setData((preCount) => preCount + 1)}>
                click
            </button>
        </PageProvide>
    );
};

export default App;
