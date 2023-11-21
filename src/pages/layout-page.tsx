import * as React from 'react';
import { useEffect } from 'react';
import { Link, Outlet, NavLink, useLoaderData } from 'react-router-dom';
const LayoutPage = (): React.ReactElement => {
  let data = useLoaderData();
  console.log(data);
  return (
    <div>
      <nav>
        <ul>
          <li>
            {' '}
            <Link to="/copyright/dssd/test">copyright</Link>
          </li>
          <li>
            <NavLink
              to={`/home`}
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            {' '}
            <a href={`/unesd`}>err</a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default LayoutPage;
