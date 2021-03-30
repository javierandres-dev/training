import React, { useState, useEffect } from 'react';

const initialRecord = {
  id: undefined,
  brand: '',
  model: '',
};

const Form = ({
  recordToUpdate,
  setRecordToUpdate,
  createRecord,
  updateRecord,
}) => {
  const [record, setRecord] = useState(initialRecord);

  const handleChange = (e) => {
    setRecord({
      ...record,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = (e) => {
    setRecord(initialRecord);
    setRecordToUpdate(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!record.brand || !record.model) {
      alert('Empty field');
      return;
    }
    if (record.id === undefined) {
      createRecord(record);
    } else {
      updateRecord(record);
    }
    handleReset();
  };

  useEffect(() => {
    if (recordToUpdate) {
      setRecord(recordToUpdate);
    } else {
      setRecord(initialRecord);
    }
  }, [recordToUpdate]);

  return (
    <form onSubmit={handleSubmit}>
      <legend>{recordToUpdate ? 'Update' : 'Create'}</legend>
      <input
        type='text'
        name='brand'
        id='brand'
        placeholder='e.g. Chevrolet'
        onChange={handleChange}
        value={record.brand}
      />
      <input
        type='text'
        name='model'
        id='model'
        placeholder='e.g. Aveo'
        onChange={handleChange}
        value={record.model}
      />
      <button type='reset' onClick={handleReset}>
        Reset
      </button>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
