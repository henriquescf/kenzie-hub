import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/dashboard.scss"
import { DashboardContent } from "../components/DashboardContent"
import { DashboardHeader } from "../components/DashboardContent/DashboardHeader"
import { DashboardMain } from "../components/DashboardContent/DashboardMain"

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
        <DashboardContent>
          <DashboardHeader {...{user, setUser}}/>
          <DashboardMain/>
        </DashboardContent>
    )
}