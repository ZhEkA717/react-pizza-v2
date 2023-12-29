import { Home, PizzaBlockDescription } from "../../pages";
import { ADMIN_ROUTE, CART_ROUTE, HOME_ROUTE, LOGIN_ROUTE, NOTFOUND_ROUTE, PIZZA_ROUTE, REGISTRATION_ROUTE } from "../../utils";
import { NotFoundBlock } from "..";
import { lazy } from "react";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";

const Cart = lazy(() => import(/*webpackChunkName: "Cart"*/ '../../pages/Cart'));
const Admin = lazy(() => import(/*webpackChunkName: "Admin"*/ '../../pages/Admin'));

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
    {
        path: CART_ROUTE,
        Component: Cart,
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home,
    },
    {
        path: LOGIN_ROUTE,
        Component: Login,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration,
    },
    {
        path: PIZZA_ROUTE,
        Component: PizzaBlockDescription,
    },
    {
        path: NOTFOUND_ROUTE,
        Component: NotFoundBlock,
    }
]