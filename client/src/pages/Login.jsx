import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../store';

const Login = () => {
  const { isLoading, error } = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user))
      .unwrap()
      .then(() => navigate('/'))
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="container wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Login to your account</p>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            value={user.password}
            onChange={handleChange}
            type="password"
            name="password"
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className="submit" type="submit" disabled={isLoading}>
          {isLoading ? 'Loging in' : 'Log in'}
        </button>

        <p className="signup-link">
          No account?
          <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
