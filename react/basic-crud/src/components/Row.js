import React from 'react';

const Row = ({ el, setRecordToUpdate, deleteRecord }) => {
  const { id, brand, model } = el;

  return (
    <tr>
      <td>{brand}</td>
      <td>{model}</td>
      <td>
        <button type='button' onClick={() => setRecordToUpdate(el)}>
          Update
        </button>
      </td>
      <td>
        <button type='button' onClick={() => deleteRecord(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Row;
