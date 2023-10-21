import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Dashboard } from "../pages/Dashboard"
import { ProtectedRoutes } from "../pages/ProtectedRoutes"

export const RoutesMain = () => {
    
    return(
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/dashboard" element={<ProtectedRoutes/>}>
                <Route index element={<Dashboard/>} />
            </Route>
        </Routes>
    )
}