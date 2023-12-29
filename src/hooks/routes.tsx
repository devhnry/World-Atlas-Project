import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../routes/ErrorPage";
import Layout from "../routes/Layout";
import HomePage from "../routes/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
