import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Home } from '@pages/home-page';
import ErrorPage from '@pages/error-page';
import Copyright from '@/pages/copyright-page';
import APP from "@/App";
export const router = createBrowserRouter([
  {
    path: '/',
    element: <APP />,
    errorElement: <ErrorPage />,
 
  children: [
  {
    path: '/copyright/:name/:license',
    element: <Copyright />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/unexist',
    element: <Copyright />,
  }] },
]);
