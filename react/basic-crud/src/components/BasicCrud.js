import { useState } from 'react';
import Form from './Form';
import Table from './Table';

const initialDb = [
  {
    id: 1,
    brand: 'seat',
    model: 'león',
  },
  {
    id: 2,
    brand: 'audi',
    model: 'a3',
  },
  {
    id: 3,
    brand: 'toyota',
    model: 'corolla',
  },
  {
    id: 4,
    brand: 'subaru',
    model: 'forester',
  },
];

function BasicCrud() {
  const [db, setDb] = useState(initialDb);
  const [recordToUpdate, setRecordToUpdate] = useState(null);

  const createRecord = (record) => {
    record.id = db.length + 1;
    setDb([...db, record]);
  };

  const updateRecord = (record) => {
    const updatedRecord = db.map((el) => (el.id === record.id ? record : el));
    setDb(updatedRecord);
  };
  const deleteRecord = (id) => {
    const isConfirm = window.confirm('Sure, delete record?');
    if (isConfirm) {
      const newDb = db.filter((el) => el.id !== id);
      setDb(newDb);
    } else {
      return;
    }
  };

  return (
    <>
      <h1>BASIC CRUD</h1>
      <Form
        recordToUpdate={recordToUpdate}
        setRecordToUpdate={setRecordToUpdate}
        createRecord={createRecord}
        updateRecord={updateRecord}
      />
      <Table
        data={db}
        setRecordToUpdate={setRecordToUpdate}
        deleteRecord={deleteRecord}
      />
    </>
  );
}

export default BasicCrud;
