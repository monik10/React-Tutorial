/* eslint-disable react/prop-types */
import  { useState } from 'react';

const ChildComponent = ({ data }) => {
  const [details, Changedetails] = useState(0);

  const handleClick = () => {
    Changedetails((details) => (details
       + 1) % Object.keys(data).length);
  };

  return (
    <div>
      
      <h1>{data[Object.keys(data)[details]]}</h1>
      <button onClick={handleClick}>Change Data</button>
    </div>
  );
};

export default ChildComponent;