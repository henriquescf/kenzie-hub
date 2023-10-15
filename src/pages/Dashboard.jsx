import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { DashboardHeader } from "../components/DashboardHeader";
import "../styles/dashboard.scss"

export const Dashboard = ({user, setUser}) => {
    const token = JSON.parse(localStorage.getItem("@User:Token"))
    const navigate = useNavigate()

    useEffect(() => {
        if (token == null) {
          navigate("/")
        }
      }, [])
      
    return (
        token &&
        <div className="dashboard-content">
            <DashboardHeader {...{user, setUser}}/>
            
            <main>
                <h1>Que pena! Estamos em desenvolvimento {`:(`} </h1>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </main>
        </div>
    )
}