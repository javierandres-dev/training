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
  const [isUpdate, setIsUpdate] = useState(false);

  const createRecord = () => {};
  const readRecord = () => {};
  const updateRecord = () => {};
  const deleteRecord = () => {};

  return (
    <>
      <h1>BASIC CRUD</h1>
      <Form
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
        createRecord={createRecord}
        updateRecord={updateRecord}
      />
      <Table data={db} setIsUpdate={setIsUpdate} deleteRecord={deleteRecord} />
    </>
  );
}

export default App;
