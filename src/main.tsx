import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/home";
import Transactions from "@/pages/transactions";
import Accounts from "@/pages/accounts";
import Credit from "@/pages/credit";
import Loans from "@/pages/loans";
import Services from "@/pages/services";
import Setting from "@/pages/setting";
import Investment from "@/pages/investment";
import "@/styles/main.scss";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
  {
    path: "/accounts",
    element: <Accounts />,
  },
  {
    path: "/investments",
    element: <Investment />,
  },
  {
    path: "/cards",
    element: <Credit />,
  },
  {
    path: "/loans",
    element: <Loans />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
], {
  basename: '.'
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
