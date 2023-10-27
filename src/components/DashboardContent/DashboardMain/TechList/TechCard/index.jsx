import { EditTechModal } from "../EditTechModal"

export const TechCard = ({tech, techList, setTechList, deleteTech, setEditSelectedTechModal}) => {

    const handleDelete = (e) => {
        e.preventDefault()
        const filteredList = techList.filter(techFromList => techFromList.id != tech.id)
        setTechList(filteredList)
        deleteTech(tech.id)
    }

    const handleEdit = (e) => {
        e.preventDefault()
        setEditSelectedTechModal(tech)
    }


    return (
        <>
        <EditTechModal/>
        <li>
            <p>{tech.title}</p>
            <div>
                <span>{tech.status}</span>
                <img src="delete.svg" onClick={handleDelete}/>
                <img src="edit.svg" onClick={handleEdit}/>
            </div>
        </li>
        </>
    )
}