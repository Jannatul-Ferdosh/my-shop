import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AllProductsPage from "./pages/AllProductsPage";
import CartPage from "./pages/CartPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import SelectedProductPage from "./pages/SelectedProductPage";
import UserListPage from "./pages/UserListPage";
import AdminAddProductPage from "./pages/AdminAddProductPage";
import AdminUpdateProductPage from "./pages/AdminUpadateProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/AllProducts", element: <AllProductsPage /> },
      { path: "/Cart", element: <CartPage /> },
      { path: "/User/SignUp", element: <SignUpPage /> },
      { path: "/User/SignIn", element: <SignInPage /> },
      { path: "/category/:category", element: <SelectedProductPage /> },
      { path: "/UserListPage", element: <UserListPage /> },
      { path: "/AdminAddProductPage", element: <AdminAddProductPage /> },
      { path: "/AdminUpdateProductPage/:productId", element: <AdminUpdateProductPage /> },
    ],
  },
]);

export default router;
