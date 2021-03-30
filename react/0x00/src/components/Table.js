import React from 'react';
import Row from './Row';

const Table = ({ data, setRecordToUpdate, deleteRecord }) => {
  return (
    <table>
      <caption>ITEMS</caption>
      <thead>
        <tr>
          <th>ITEM</th>
          <th>MODEL</th>
          <th colSpan='2'>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr className='ta-center'>
            <td colSpan='4'>no data</td>
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
