import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="pt-6 pb-4 px-3 sm:px-20">
      <div className="flex justify-between">
        <p className="text-primary">
          <NavLink to="/">Kwetu Jobs</NavLink>
        </p>
        <ul className="hidden sm:flex gap-x-4">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-primary font-semibold'
                  : 'hover:text-primary font-semibold'
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-primary font-semibold'
                  : 'hover:text-primary font-semibold'
              }
              to="/jobs"
            >
              Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-primary font-semibold'
                  : 'hover:text-primary font-semibold'
              }
              to="/login"
            >
              Login / Register
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-primary font-semibold'
                  : 'hover:text-primary font-semibold'
              }
              to="/register"
            >
              For Employers
            </NavLink>
          </li>
        </ul>
        <div className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          <p>Menu</p>
        </div>
      </div>
      <ul className={isOpen ? 'flex flex-col sm:hidden' : 'hidden'}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-primary font-semibold'
                : 'hover:text-primary font-semibold'
            }
            to="/jobs"
          >
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-primary font-semibold'
                : 'hover:text-primary font-semibold'
            }
            to="/login"
          >
            Login / Register
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-primary font-semibold'
                : 'hover:text-primary font-semibold'
            }
            to="/register"
          >
            For Employers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
