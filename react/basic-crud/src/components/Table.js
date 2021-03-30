import React from 'react';
import Row from './Row';

const Table = ({ data }) => {
  return (
    <table>
      <caption>Table</caption>
      <thead>
        <tr>
          <th>BRAND</th>
          <th colSpan='4'>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan='4'>no data</td>
          </tr>
        ) : (
          data.map((el) => <Row key={el.id} el={el} />)
        )}
      </tbody>
    </table>
  );
};

export default Table;
