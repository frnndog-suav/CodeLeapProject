import { lazy } from "react"
import { Route, Routes } from "react-router"
import { APP_PATHS } from "./paths"

const LoginPage = lazy(() => import("@/pages/login"))
const HomePage = lazy(() => import("@/pages/home"))

export const AppRoutes = () => {
    return (<Routes>
        <Route path={"*"} element={<div>página não existe</div>} />
        <Route index element={<LoginPage />} />
        <Route path={APP_PATHS.LOGIN} element={<LoginPage />} />
        <Route path={APP_PATHS.HOME} element={<HomePage />} />
    </Routes>)
}