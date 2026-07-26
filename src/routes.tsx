import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AllProductsPage from "./pages/AllProductsPage";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/AllProducts", element: <AllProductsPage /> },
      { path: "/Cart", element: <CartPage /> },
    ],
  },
]);

export default router;
