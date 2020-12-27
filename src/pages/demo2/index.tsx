import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const App: React.FC<{}> = (props) => {
    const [data, setData] = useState<number>(1);
    const aaa = useSelector(state => state);
    console.log('2', aaa, props);
    return (
        <>
            <div className="aaa">{data}</div>
            <button type="button" onClick={() => setData((preCount) => preCount + 1)}>
                click
            </button>
        </>
    );
};

export default App;
