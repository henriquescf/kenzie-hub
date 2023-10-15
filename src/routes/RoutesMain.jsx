import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Dashboard } from "../pages/Dashboard"
import { useState } from "react"

export const RoutesMain = () => {
    const storagedData = JSON.parse(localStorage.getItem("@User:Token"))
    const [user, setUser] = useState(storagedData ? storagedData.user : null)
    
    return(
        <Routes>
            <Route path="/" element={<Login {...{setUser}}/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/dashboard" element={<Dashboard {...{user, setUser}}/>} />
        </Routes>
    )
}