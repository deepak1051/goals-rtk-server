import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials, useRegisterMutation } from '../store';

const Register = () => {
  const [register, { error, isLoading }] = useRegisterMutation();
  const [userData, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await register(userData).unwrap();

      dispatch(setCredentials(data));
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Register to your account</p>

        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={userData.name}
            name="name"
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={userData.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={userData.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        {error && (
          <p style={{ color: 'red' }}>
            {error?.data?.message || error?.message}
          </p>
        )}
        <button className="submit" type="submit" disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </button>

        <p className="signup-link">
          Already have an account?
          <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
