import React, { useEffect, useState } from 'react';

const Cheack = () => {
        const [data1, setData1] = useState([]);
        const [data2, setData2] = useState([]);
      
        useEffect(() => {
          Promise.all([
            fetch("/data1.json").then((response) => response.json()),
            fetch("/data2.json").then((response) => response.json())
          ])
            .then(([data1, data2]) => {
              setData1(data1);
              setData2(data2);
            })
            .catch((error) => console.error(error));
        }, []);
    return (
        <div>
            <h1>Data from JSON files</h1>
        <h2>File 1:</h2>
        <ul>
          {data1.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <h2>File 2:</h2>
        <ul>
          {data2.map((item) => (
            <li key={item.id}>Age: {item.age}</li>
          ))}
        </ul>
        </div>
    );
};

export default Cheack;