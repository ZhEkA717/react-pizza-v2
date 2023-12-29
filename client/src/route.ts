import { Admin, Cart, Home, PizzaBlockDescription } from "./pages";
import { ADMIN_ROUTE, CART_ROUTE, HOME_ROUTE, LOGIN_ROUTE, NOTFOUND_ROUTE, PIZZA_ROUTE, REGISTRATION_ROUTE } from "./utils";
import { NotFoundBlock } from "./components";

// const Cart = lazy(() => import(/*webpackChunkName: "Cart"*/ './pages/Cart'));
// const PizzaBlockDescription = lazy(() => import(/*webpackChunkName: "PizzaBlockDescription"*/ './pages/PizzaBlockDescription'));


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
    // {
    //     path: LOGIN_ROUTE,
    //     Component: Admin,
    // },
    {
        path: PIZZA_ROUTE,
        Component: PizzaBlockDescription,
    },
    {
        path: NOTFOUND_ROUTE,
        Component: NotFoundBlock,
    }
]