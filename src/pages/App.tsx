import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const App: React.FC<{}> = () => {
    const [data, setData] = useState<number>(1);
    const aaa = useSelector(state => state);
    console.log(aaa);
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
