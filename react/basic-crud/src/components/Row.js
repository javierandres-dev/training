import React from 'react';

const Row = ({ el }) => {
  return (
    <tr>
      <td>{el.brand}</td>
      <td>
        <button type='button'>Read</button>
      </td>
      <td>
        <button type='button'>Update</button>
      </td>
      <td>
        <button type='button'>Delete</button>
      </td>
    </tr>
  );
};

export default Row;
