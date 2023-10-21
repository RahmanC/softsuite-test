import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import AppLayout from "layout/appLayout";
import { PATH_DASHBOARD } from "./paths";

const Loadable = (Component: React.ComponentType) => (props: any) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          element: <Navigate to={PATH_DASHBOARD.general.app} replace />,
          index: true,
        },
        { path: "elements", element: <Elements /> },
        { path: "*", element: <Page404 /> },
      ],
    },
  ]);
}

const Elements = Loadable(lazy(() => import("screens/elements")));
const Page404 = Loadable(lazy(() => import("screens/Page404")));
