import * as React from 'react';
import {Container,  Button} from 'react-bootstrap';
import Copyright from './pages/copyright-page';
import ReactQueryPage from './entries/react-query-page'
import ListReactHooks from './entries/list-react-hooks';
import {Link,Outlet} from 'react-router-dom';
//import './App.scss';
// import Dashboard from './Dashboard';

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>   <Link to='/copyright/dssd/test'>copyright</Link></li>
          <li>    <a href={`/home`}>Home</a></li>
          <li>    <a href={`/unesd`}>err</a></li>
        </ul>
      </nav>
      <Outlet/>

    </div>

  );
}