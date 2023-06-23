import { Link } from 'react-router-dom';
import { GiSkullCrossedBones } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store';

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <Link
              to="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <GiSkullCrossedBones className="logo" />
            </Link>
          </div>

          <div className="col-md-3 text-end">
            {user ? (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-outline-secondary me-2"
                >
                  <Link to="/login">Login</Link>
                </button>
                <button type="button" className="btn btn-secondary">
                  <Link to="/register">Sign-up</Link>
                </button>
              </>
            )}
          </div>
        </header>
      </div>

      <div className="b-example-divider"></div>
    </>

    // <div className="header">
    //   <div className="logo">
    //     <Link to="/">Goal</Link>
    //   </div>
    //   <ul>
    //     {user ? (
    //       <li>
    //         <button onClick={handleLogout}>
    //           <FaSignOutAlt />
    //           Logout
    //         </button>
    //       </li>
    //     ) : (
    //       <>
    //         {' '}
    //         <li>
    //           <Link to="/login">
    //             <FaSignInAlt />
    //             Login
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/register">
    //             <FaUser />
    //             Register
    //           </Link>
    //         </li>
    //       </>
    //     )}
    //   </ul>
    // </div>
  );
};

export default Header;
