import React, { useEffect, useReducer } from 'react';

const initialState = {
  id: null,
  name: '',
  completed: false,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_ID': {
      return { ...state, id: action.value };
    }
    case 'SET_NAME': {
      return { ...state, name: action.value };
    }
    case 'SET_COMPLETED': {
      return { ...state, completed: action.value };
    }
    case 'RESET': {
      return initialState;
    }
    default:
      return state;
  }
};

export const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log('state:', state);
  }, [state]);

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_ID', value: Date.now() });
  };

  return (
    <>
      <div>ReducerHook</div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type='text'
            value={state.name}
            onInput={(e) =>
              dispatch({ type: 'SET_NAME', value: e.target.value })
            }
          />
        </label>
        <label>
          Completed
          <input
            type='checkbox'
            checked={state.completed}
            onChange={() =>
              dispatch({ type: 'SET_COMPLETED', value: !state.completed })
            }
          />
        </label>
        <button type='reset' onClick={handleReset}>
          Reset
        </button>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};
