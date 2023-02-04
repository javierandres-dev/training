import React from 'react';
import { useState } from 'react';
import MemosChild from './MemosChild';

export const MemosParent = () => {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  console.log('MemosParent component rendered');

  return (
    <>
      <div>MemosParent</div>
      <p>Parent count: {parentCount}</p>
      <button onClick={() => setParentCount(parentCount + 1)}>
        Increment parent count
      </button>
      <hr />
      <MemosChild childCount={childCount} setChildCount={setChildCount} />
    </>
  );
};
