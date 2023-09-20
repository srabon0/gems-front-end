import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import Main from "../pages/Main";
import ORU from "../pages/ORU";
import Login from "../pages/Login";
import User from "../pages/User";


import AddUserAdmin from "../pages/AddUserAdmin";
import RequireAuth from "../pages/Auth/RequireAuth";
import RIO from "../pages/RIO";
import CSO from "../pages/CSO";
import Status from "../pages/Status";
import Details from "../pages/Details";
import AssignRole from "../pages/AssignRole";
import UserTableWithAssignRole from "../pages/UserTableWithAssignRole";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <RequireAuth>
            <Home />
        </RequireAuth>,
        children: [
            {
                path: "/",
                element: <RequireAuth>
                    <Main />
                </RequireAuth>,
            },
            {
                path: "/adduser",
                element: <RequireAuth>
                    <AddUserAdmin />
                </RequireAuth>,
            },
            {
                path: "/addrole",
                element: <RequireAuth>
                    <UserTableWithAssignRole />
                </RequireAuth>,
            },
            {
                path: "/addrole/:ID",
                element: <RequireAuth>
                    <AssignRole />
                </RequireAuth>,
            },
            {
                path: "/status",
                element: <RequireAuth>
                    <Status />
                </RequireAuth>,
            },
            {
                path: "/oru",
                element: <RequireAuth>
                    <ORU />
                </RequireAuth>,
            },
            {
                path: "/rio",
                element: <RequireAuth>
                    <RIO />
                </RequireAuth>,
            },
            {
                path: "/cso",
                element: <RequireAuth>
                    <CSO />
                </RequireAuth>,
            },
            {
                path: "/about",
                element:
                    <RequireAuth>
                        <About />
                    </RequireAuth>
                , //this will also require admin
            },
            {
                path: "user/:ID",
                element: <User />
            },
            {
                path: "details/:ID",
                element: <Details />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: "*",
        element: <Notfound></Notfound>,
    }



    // {
    //   path: "/dashboard",
    //   element: (
    //       <Dashboard />
    //   ),
    //   children: [
    //     {
    //       path: "/dashboard",
    //       element: <Orders /> , //this will also require admin
    //     },
    //     {
    //       path: "/dashboard/orders",
    //       element: <Orders /> , //this will also require admin
    //     },
    //     {
    //       path: "add-product",
    //       element: <AddProduct />,
    //     },
    //   ],
    // },
]);

export default routes;