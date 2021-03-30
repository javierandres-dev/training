//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';

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

function App() {
  const [db, setDb] = useState(initialDb);
  const [recordToUpdate, setRecordToUpdate] = useState(null);

  const createRecord = (record) => {
    record.id = db.length + 1;
    setDb([...db, record]);
  };
  const readRecord = () => {};
  const updateRecord = (record) => {
    const updatedRecord = db.map((el) => (el.id === record.id ? record : el));
    setDb(updatedRecord);
  };
  const deleteRecord = () => {};

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

export default App;
