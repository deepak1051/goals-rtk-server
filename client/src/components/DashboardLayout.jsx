import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const DashboardLayout = () => {
  const { user } = useSelector((state) => state.auth);
  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default DashboardLayout;
