import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '@/pages/home';
import Transactions from '@/pages/transactions';
import Loans from '@/pages/loans';
import Services from '@/pages/services';
import '@/styles/main.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/transactions',
    element: <Transactions />,
  },
  {
    path: '/loans',
    element: <Loans />,
  },
  {
    path: '/services',
    element: <Services />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
