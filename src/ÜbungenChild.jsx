import React, { useState } from 'react';

export default function ÜbungenChild({ namesLength, addName, data }) {
  //   if (namesLength === 'error') {
  //     throw new Error();
  //   }
  const [newName, setNewName] = useState('');
  return (
    <div>
      {data.map((data) => (
        <h3>{data} </h3>
      ))}
      <h2>names lenght: {namesLength}</h2>
      <input
        type='text'
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={() => addName(newName)}>push</button>
    </div>
  );
}
