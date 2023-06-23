import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useThunk from '../hooks/useThunk';
import { getAllGoals } from '../store';
import EditGoal from './EditGoal';
import Skeleton from 'react-loading-skeleton';

const Goals = () => {
  const { goals } = useSelector((state) => state.goal);

  const [fetchGoals, isLoading, error] = useThunk(getAllGoals);

  useEffect(() => {
    fetchGoals();
  }, [fetchGoals]);

  let content;
  if (isLoading) {
    content = (
      <>
        <Skeleton count={1} height={180} width={180} />
        <Skeleton count={1} height={180} width={180} />
        <Skeleton count={1} height={180} width={180} />
        <Skeleton count={1} height={180} width={180} />
        <Skeleton count={1} height={180} width={180} />
      </>
    );
  } else if (error) {
    content = error;
  } else {
    content = goals.map((item) => (
      <div className="col p-2" key={item._id}>
        <div className="card shadow-sm">
          <img
            src={`https://picsum.photos/seed/${item._id}/200/300`}
            alt="goal thumbnail"
          />
          <EditGoal goal={item} />
        </div>
      </div>
    ));
  }

  return (
    <>
      <main className="mt-4">
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-2 row-cols-sm-4 row-cols-md-5 g-3">
              {content}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Goals;
