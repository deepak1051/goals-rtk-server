import React, { Fragment } from 'react';

import EditGoal from './EditGoal';
import Skeleton from 'react-loading-skeleton';
import { useGetGoalsQuery } from '../store/apis/goalsApi';

const Goals = () => {
  const { data: goals, error, isLoading } = useGetGoalsQuery();

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
    content = error?.data?.message || error?.message || error?.error;
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
