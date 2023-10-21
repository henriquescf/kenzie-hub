import { useUserContext } from "../../../providers/UserContext"

export const DashboardHeader = () => {

    const { user, userLogout } = useUserContext()

    return(
        <header className="dashboard-header">
            <div className="dashboard-header__primary">
                <img src="/Logo.svg"/>
                <button onClick={userLogout}>Sair</button>
            </div>

            <div className="dasboard-header__secondary-wrap">
                <div className="dashboard-header__secondary">
                    <h1>Olá, {user.name}</h1>
                    <span>{user.course_module}</span>
                </div>
            </div>
        </header>
    )
}