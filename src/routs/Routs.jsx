import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../layouts/Root';
import Home from '../pages/Home/Home';
import Register from '../pages/Home/Auth/Register';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                index : true,
                element: <Home></Home>
            },
            {
                path: '/regiser',
                element: <Register></Register>

            }
        ]
    },
    
]);