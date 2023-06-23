import React, { useState } from 'react';
import { addGoal } from '../store';
import useThunk from '../hooks/useThunk';
import Loader from '../utils/Loader';

const CreateGoal = () => {
  const [text, setText] = useState('');
  const [createGoal, isLoading, error] = useThunk(addGoal);

  const handleSubmit = (e) => {
    e.preventDefault();
    createGoal(text);
    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Set A Goal</label>

      <div class="input-group mb-3 mt-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          class="form-control"
          placeholder="add a goal"
          aria-describedby="basic-addon2"
        />
        <button
          class="input-group-text btn btn-success"
          id="basic-addon2"
          disabled={isLoading}
          style={{ height: '50px', width: '120px' }}
        >
          {isLoading ? <Loader /> : 'Add'}
        </button>
      </div>

      {error && <p style={{ color: 'crimson' }}>{error}</p>}
    </form>
  );
};

export default CreateGoal;
