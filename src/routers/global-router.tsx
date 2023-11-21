import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Home } from '@pages/home-page';
import ErrorPage from '@pages/error-page';
import Copyright from '@/pages/copyright-page';
import LayoutPage from '@/pages/layout-page';
import APP from "@/App";
import {AuthProvider} from "@api/Auth-Provider";
export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    // loader: ()=>{return {user:AuthProvider.userName,isAuthenticated:AuthProvider.isAuthenticated};},
    // action: ()=>{AuthProvider.signin("tes");return null;},
    errorElement: <ErrorPage />,
 
  children: [
  {
    path: '/copyright/:name/:license',
    element: <Copyright />,
  },
  // {
  //   path: '/blog/:slug',
  //   element: <ActionPage />,
  // },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/unexist',
    element: <Copyright />,
  }]}
],{basename:'/',future:{}});
