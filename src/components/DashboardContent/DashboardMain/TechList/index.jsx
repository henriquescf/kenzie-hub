import { useTechContext } from "../../../../providers/TechContext"
import { CreateTechModal } from "./CreateTechModal"
import { TechCard } from "./TechCard"

export const TechList = () => {

    const { techList, setTechList, createTechModal, setCreateTechModal, deleteTech, createTech, editTech, setEditSelectedTechModal } = useTechContext()

    const handleCreateTech = (e) => {
        e.preventDefault()
        setCreateTechModal(true)
    }

    return (
        <>
        {createTechModal && <CreateTechModal {...{setCreateTechModal, createTech}} />}
        <div className="tech">
            <div className="tech-header">
                <h2>Tecnologias</h2>
                <button onClick={handleCreateTech}>+</button>
            </div>

            <ul className="tech-list">
                {techList.length != 0 ? techList.map(tech => {
                    return (
                        <TechCard key={tech.id} {...{tech, techList, setTechList, deleteTech, editTech, setEditSelectedTechModal}}/>
                        )
                    })
                    :
                    <p>Você ainda não possui nenhuma tecnologia cadastrada.</p>   
                }
            </ul>
        </div>
        </>
    )
}