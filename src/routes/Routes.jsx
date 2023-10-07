import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import EventCart from "../pages/EventCart/EventCart";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServiceDetail from "../pages/ServiceDetail/ServiceDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/eventCart',
                element: <EventCart></EventCart>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/services/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: () => fetch('/services.json')
            }
        ]
    },
]);

export default router;