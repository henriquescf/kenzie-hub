import { useEffect } from 'react'
import '../../../../../styles/modal.scss'
import { useForm } from 'react-hook-form'
import { useTechContext } from '../../../../../providers/TechContext'

export const EditTechModal = () => {

    const { editTech, editSelectedTechModal, setEditSelectedTechModal } = useTechContext()
  
     const handleCloseModal = (e) => {
        e.preventDefault()
        setEditSelectedTechModal(null)
     }
  
     useEffect(() => {
        function handleEscapeKey(event) {
          if (event.code === "Escape") {
            setEditSelectedTechModal(null)
          }
        }
     
        document.addEventListener("keydown", handleEscapeKey)
        return () => document.removeEventListener("keydown", handleEscapeKey)
      }, [])

      const { register, handleSubmit } = useForm()

      const editTechDetails = (data) => {
        editTech(data, editSelectedTechModal.id);
        setEditSelectedTechModal(null)
      }

    return (
      editSelectedTechModal != null &&
      <div role="dialog" className="modalOverlay" onClick={() => setEditSelectedTechModal(null)}>
          <div className="modalBox" id="createTechModal" onClick={e => e.stopPropagation()}>
              <div className="createTechModal-header">
                  <h3>Tecnologia Detalhes</h3>
                  <button onClick={handleCloseModal}>X</button>
              </div>
              <form className="createTechModal-main" onSubmit={handleSubmit(editTechDetails)}>
                  <label>Nome</label>
                  <input className="editMode" type="text" value={editSelectedTechModal.title} disabled/>
                  <label>Status</label>
                  <select className="editMode" {...register("status")}>
                      <option className="editMode">Iniciante</option>
                      <option className="editMode">Intermediário</option>
                      <option className="editMode">Avançado</option>
                  </select>
                  <button type="submit">Salvar alterações</button>
              </form>
          </div>
      </div>
    )
}