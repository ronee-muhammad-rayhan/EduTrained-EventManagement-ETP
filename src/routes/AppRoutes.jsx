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


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/data/events.json'),
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
                loader: () => fetch('/data/events.json'),
            },
            {
                path: '/service-details/:id',
                element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
                loader: () => fetch('/data/events.json'),
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ],
    }
]);