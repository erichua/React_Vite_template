import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Home } from '@pages/home-page';

import APP from "@/App";
import {AuthProvider} from "@api/Auth-Provider";


const Copyright = lazy(async () => import('@pages/copyright-page'));
const ErrorPage = lazy(async () => import('@pages/error-page'));
const LayoutPage = lazy(async () => import('@pages/layout-page'));


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
