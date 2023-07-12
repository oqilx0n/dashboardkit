import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Overview from './pages/Overview';
import Tickets from './pages/Tickets';
import { Layout } from './components/Layout/Layout';
import { Posts } from './pages/Posts/Posts';
import { Comments } from './pages/Comments/Comments';

import './lang/i18n.settings';
import { Settings } from './pages/Settings/Settings';
import { Subscription } from './pages/Subscription/Subscription';



const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[

      {
        path: '/',
        index: true,
        element: <Overview/>
      },
      {
        path: '/tickets',
        element: <Tickets />
      },
      {
        path: '/post',
        element: <Posts />
      },
      {
        path: '/comments',
        element: <Comments/>
      },
      {
        path: '/settings',
        element: <Settings/>
      },
      {
        path: 'subscription',
        element:<Subscription/>
      }
    ]
  }
  
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
