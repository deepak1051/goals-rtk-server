import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import Loader from '../utils/Loader';
import {
  useDeleteGoalMutation,
  useUpdateGoalMutation,
} from '../store/apis/goalsApi';

const EditGoal = ({ goal }) => {
  const [inputText, setInputText] = useState(goal.text);

  const [updateGoal, updateGoalResult] = useUpdateGoalMutation();
  const [deleteGoal1, deleteGoalResult] = useDeleteGoalMutation();

  const [show, setShow] = useState(false);

  const handleSubmit = async () => {
    try {
      await updateGoal({ id: goal._id, text: inputText }).unwrap();
      setShow(false);
    } catch (error) {
      console.warn(error);
    }
  };

  const handleDelete = (id) => {
    deleteGoal1(id);
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
              {deleteGoalResult.isLoading ? (
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
          <button onClick={handleSubmit} disabled={updateGoalResult.isLoading}>
            {updateGoalResult.isLoading ? 'Saving' : 'Save'}
          </button>
        </div>
      )}
    </>
  );
};

export default EditGoal;
