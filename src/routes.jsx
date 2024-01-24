import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ButtonPage from "./pages/contents/ButtonPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "components/buttons", element: <ButtonPage /> },
    ],
  },
]);

export default router;
