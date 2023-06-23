import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import useThunk from '../hooks/useThunk';
import { deleteGoal, updateGoal } from '../store';
import Loader from '../utils/Loader';

const EditGoal = ({ goal }) => {
  const [inputText, setInputText] = useState(goal.text);
  const [removeGoal, delLoading, delError] = useThunk(deleteGoal);
  const [editGoal] = useThunk(updateGoal);

  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    console.log('update');
    editGoal({ id: goal._id, text: inputText });
    setShow(false);
  };

  const handleDelete = (id) => {
    removeGoal(id);
  };
  return (
    <>
      {!show ? (
        <div>
          <div className="card-body">
            <p className="card-text">{goal.text}</p>
          </div>
          <div className="px-2">
            <button
              onClick={() => setShow(true)}
              style={{ height: '40px', width: '45px' }}
            >
              <AiOutlineEdit />
            </button>
            <button
              onClick={() => handleDelete(goal._id)}
              style={{ height: '40px', width: '45px' }}
            >
              {delLoading ? (
                <Loader />
              ) : (
                <AiOutlineDelete style={{ color: 'red', fontSize: '20px' }} />
              )}
            </button>
          </div>
        </div>
      ) : (
        <div className="p-2">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              autoFocus
            />
          </div>
          <button onClick={() => setShow(false)}>Cancel</button>
          <button onClick={handleSubmit}>Save</button>
        </div>
      )}
    </>
  );
};

export default EditGoal;
