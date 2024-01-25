import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import TypographyPage from "./pages/contents/TypographyPage";
import ButtonPage from "./pages/contents/ButtonPage";
import BadgePage from "./pages/contents/BadgePage";
import DropdownListPage from "./pages/contents/DropdownListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "components/typography", element: <TypographyPage /> },
      { path: "components/buttons", element: <ButtonPage /> },
      { path: "components/badges", element: <BadgePage /> },
      { path: "components/dropdownlist", element: <DropdownListPage /> },
    ],
  },
]);

export default router;
