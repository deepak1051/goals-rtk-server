import React from 'react';
import { useSelector } from 'react-redux';

import CreateGoal from '../components/CreateGoal';

import Goals from '../components/Goals';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="container">
      <p>Welcome {user.name}</p>
      <CreateGoal />
      <Goals />
    </div>
  );
};

export default Dashboard;
