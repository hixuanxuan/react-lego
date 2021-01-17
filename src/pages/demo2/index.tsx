import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditElementWrapper from '../../components/editElementWrapper';

const App: React.FC<{}> = (props) => {
    const [data, setData] = useState<number>(1);
    const aaa = useSelector(state => state);
    console.log('2', aaa, props);
    return (
        <>
            <div className="aaa">{data}</div>
            <EditElementWrapper>
                <div className="test">可编辑</div>
            </EditElementWrapper>
            <button type="button" onClick={() => setData((preCount) => preCount + 1)}>
                click
            </button>
        </>
    );
};

export default App;
