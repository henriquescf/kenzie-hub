import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({})

export const useUserContext = () => {
    return useContext(UserContext);
}

export const UserProvider = ({children}) => {

    const storagedData = JSON.parse(localStorage.getItem("@User:Token"))
    const [user, setUser] = useState(storagedData ? storagedData.user : null)

    const navigate = useNavigate()

    const userLogin = async (formData) => {
        try{
            const { data } = await api.post("/sessions", formData)
            setUser(data.user)
            localStorage.setItem("@User:Token", JSON.stringify(data))
            navigate("/dashboard")
        } catch(error){
            toast.error("Email ou senha inválidos.")
        }
    }

    const userRegister = async (formData) => {
        try{
            const { data } = await api.post("/users", formData)
            toast.success("Cadastro efetuado com sucesso.")
            navigate("/")
        } catch(error){
            if(error.response.data.message == "Email already exists"){
              toast.error("Email já existente, tente novamente.")
          } else{
              toast.error("Ooops, algo deu errado, tente novamente.")
          }
        }
    }

    const userLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem("@User:Token")
        setUser(null)
        navigate("/")
    }

    useEffect(() => {
        const loadUser = async () => {
            const token = JSON.parse(localStorage.getItem("@User:Token"))
            if (token) {
                try{
                    const { data } = await api.get(`/profile`, {
                        headers: {
                            Authorization: `Bearer ${token.token}`
                        }
                    })
                    setUser(token.user)
                    navigate("/dashboard")
                } catch (error) {
                    console.log(error)
                    localStorage.removeItem("@User:Token")
                }
            }
        }

        loadUser()
      }, [])

    return (
        <UserContext.Provider value = {{userLogin, userRegister, userLogout, user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}