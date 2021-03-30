import React, { useState } from 'react';

const initialForm = {
  id: undefined,
  brand: '',
  model: '',
};

const Form = ({ isUpdate, setIsUpdate, createRecord, updateRecord }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleReset = (e) => {
    setForm(initialForm);
    setIsUpdate(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.brand || !form.model) {
      alert('Empty field');
      return;
    }
    if (form.id === undefined) {
      createRecord(form);
    } else {
      updateRecord(form);
    }
    handleReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Form</legend>
      <input
        type='text'
        name='brand'
        id='brand'
        placeholder='e.g. Chevrolet'
        onChange={handleChange}
        value={form.brand}
      />
      <input
        type='text'
        name='model'
        id='model'
        placeholder='e.g. Aveo'
        onChange={handleChange}
        value={form.model}
      />
      <button type='reset' onClick={handleReset}>
        Reset
      </button>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
