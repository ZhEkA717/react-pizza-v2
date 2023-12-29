import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "./route";
import { Suspense } from "react";

export const AppRouter = () => {
    const isAuth = true;
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}, i) => {
                return <Route key={i} path={path} element = {<Suspense><Component/></Suspense>}/>
            })}
            {publicRoutes.map(({path, Component}, i) => {
                return <Route key={i} path={path} element = {<Component/>}/>
            })}
        </Routes>
    );
};