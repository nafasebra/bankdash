import { 
  // createBrowserRouter, 
  createHashRouter 
} from "react-router-dom";

const router = createHashRouter(
  [
    {
      path: "/",
      lazy: async () => ({
        Component: (await import("@/pages/home")).default,
      }),
    },
    {
      path: "/transactions",
      lazy: async () => ({
        Component: (await import("@/pages/transactions")).default,
      }),
    },
    {
      path: "/accounts",
      lazy: async () => ({
        Component: (await import("@/pages/accounts")).default,
      }),
    },
    {
      path: "/investments",
      lazy: async () => ({
        Component: (await import("@/pages/investment")).default,
      }),
    },
    {
      path: "/cards",
      lazy: async () => ({
        Component: (await import("@/pages/credit")).default,
      }),
    },
    {
      path: "/loans",
      lazy: async () => ({
        Component: (await import("@/pages/loans")).default,
      }),
    },
    {
      path: "/services",
      lazy: async () => ({
        Component: (await import("@/pages/services")).default,
      }),
    },
    {
      path: "/setting",
      lazy: async () => ({
        Component: (await import("@/pages/setting")).default,
      }),
    },
  ],
  {
    basename: "/",
  }
);

export default router;
