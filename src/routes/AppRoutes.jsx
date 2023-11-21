import { createBrowserRouter } from "react-router-dom";
import Root from "../outlines/Root";
import ErrorElement from "../pages/ErrorPage/ErrorElement";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFoundPage/NotFound";
import PrivateRoutes from "./ProtectedRoutes/PrivateRoutes";
import Dashboard from "../pages/Dashboard/Dashboard";
import ServiceDetails from "../pages/Services/ServiceDetails";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blog/Blog";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/data/fake-data.json'),
            },
            {
                path: "/about",
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
                path: '/services',
                element: <PrivateRoutes><Services></Services></PrivateRoutes>,
                loader: () => fetch('/data/fake-data.json'),
            },
            {
                path: '/services/:id',
                element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
                loader: () => fetch('/data/fake-data.json'),
            },
            {
                path: '/blog',
                element: <PrivateRoutes><Blog></Blog></PrivateRoutes>,
            },
            {
                path: '/contact',
                element: <PrivateRoutes><Contact></Contact></PrivateRoutes>,
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ],
    }
]);