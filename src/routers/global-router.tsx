import React, { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Home } from '@pages/home-page'

import APP from '@/App'
import { AuthProvider } from '@api/Auth-Provider'
import Dashboard from '@/pages/dashboard'

const Copyright = lazy(async () => import('@pages/copyright-page'))
const ErrorPage = lazy(async () => import('@pages/error-page'))
const LayoutPage = lazy(async () => import('@pages/layout-page'))
const App = lazy(async () => import('@/App'))
const routers = [
    {
        path: '/',
        element: <LayoutPage />,
        // loader: ()=>{return {user:AuthProvider.userName,isAuthenticated:AuthProvider.isAuthenticated};},
        // action: ()=>{AuthProvider.signin("tes");return null;},
        errorElement: <ErrorPage />,

        children: [
            {
                index: true,
                path: '/Dashboard',
                element: <Dashboard />,
            },
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
                path: '/app',
                element: <APP />,
            },
            {
                path: '/unexist',
                element: <Copyright />,
            },
        ],
    },
]

export { routers }
export default createBrowserRouter(routers, { basename: '/', future: {} })
