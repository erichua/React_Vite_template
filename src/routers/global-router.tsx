import React from "react";
import {createBrowserRouter} from 'react-router-dom';
import {Home} from '@pages/home-page';
import ErrorPage  from '@pages/error-page';
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage/>,
    }
]);
