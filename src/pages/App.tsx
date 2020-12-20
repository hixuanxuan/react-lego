import React, { useState } from 'react';

const App: React.FC<{}> = () => {
  const [data, setData] = useState<number>(1);
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
