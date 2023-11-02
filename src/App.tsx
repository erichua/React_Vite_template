import * as React from 'react';
import {Container,  Button} from 'react-bootstrap';
import Copyright from './Copyright';
import ReactQueryPage from './enteries/react-query-page'
import ListReactHooks from './enteries/list-react-hooks';
import './App.scss';
// import Dashboard from './Dashboard';

export default function App() {
  return (
   <Container><ListReactHooks/><ReactQueryPage/><Copyright/></Container>
  );
}