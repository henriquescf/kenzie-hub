import { createContext, useContext, useState } from "react";
import { useUserContext } from "./UserContext";
import { api } from "../services/api";

const TechContext = createContext ({})

export const useTechContext = () => {
    return useContext(TechContext)
}


export const TechProvider = ({children}) => {
    const token = JSON.parse(localStorage.getItem("@User:Token"))

    const [createTechModal, setCreateTechModal] = useState(false)
    const [editSelectedTechModal, setEditSelectedTechModal] = useState(null);
    const { techList, setTechList } = useUserContext()

    const createTech = async (formData) => {
        try{
            const { data } = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTechList([...techList, data])
            return data
        } catch (error){
            console.log(error)
        }
    }

    const editTech = async(formData, techId) => {
        try{
            const { data } = await api.put(`/users/techs/${techId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const newTechList = techList.map(tech => {
                if (tech.id === techId) {
                   return data;
                } else {
                   return tech;
                }
            })

            setTechList(newTechList);
            
        } catch(error){
            console.log(error)
        }
    }
    
    const deleteTech = async (techId) => {
        try{
            const { data } = await api.delete(`/users/techs/${techId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return data
        } catch (error){
            console.log(error)
        }
    }

    return (
        <TechContext.Provider value={{techList, setTechList, createTechModal, setCreateTechModal, createTech, editTech, deleteTech, editSelectedTechModal, setEditSelectedTechModal}}>
            {children}
        </TechContext.Provider>
    )
}