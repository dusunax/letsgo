import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "../App";
import Root from "../pages/Root";
import Sample from "../pages/Sample";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Root />,
      },
      {
        path: "sample",
        element: <Sample />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
