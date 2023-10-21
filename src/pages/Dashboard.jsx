import "../styles/dashboard.scss"
import { DashboardContent } from "../components/DashboardContent"
import { DashboardHeader } from "../components/DashboardContent/DashboardHeader"
import { DashboardMain } from "../components/DashboardContent/DashboardMain"

export const Dashboard = () => {
      
    return (
        <DashboardContent>
          <DashboardHeader/>
          <DashboardMain/>
        </DashboardContent>
    )
}