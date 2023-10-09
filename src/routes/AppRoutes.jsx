import { createBrowserRouter } from "react-router-dom";
import Root from "../outlines/Root";
import ErrorElement from "../pages/ErrorPage/ErrorElement";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFoundPage/NotFound";
import PrivateRoutes from "./ProtectedRoutes/PrivateRoutes";
import Dashboard from "../pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: '/dashboard',
                element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ],
    }
]);