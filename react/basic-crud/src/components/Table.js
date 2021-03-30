import React from 'react';
import Row from './Row';

const Table = ({ data, setRecordToUpdate, deleteRecord }) => {
  return (
    <table>
      <caption>Table</caption>
      <thead>
        <tr>
          <th>BRAND</th>
          <th>MODEL</th>
          <th colSpan='3'>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan='5'>no data</td>
          </tr>
        ) : (
          data.map((el) => (
            <Row
              key={el.id}
              el={el}
              setRecordToUpdate={setRecordToUpdate}
              deleteRecord={deleteRecord}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;
