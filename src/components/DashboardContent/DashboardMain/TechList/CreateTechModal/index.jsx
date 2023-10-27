import { useEffect } from 'react'
import '../../../../../styles/modal.scss'
import { useForm } from 'react-hook-form'

export const CreateTechModal = ({setCreateTechModal, createTech}) => {
  
     const handleCloseModal = (e) => {
        e.preventDefault()
        setCreateTechModal(false)
     }
  
     useEffect(() => {
        function handleEscapeKey(event) {
          if (event.code === "Escape") {
            setCreateTechModal(false)
          }
        }
     
        document.addEventListener("keydown", handleEscapeKey)
        return () => document.removeEventListener("keydown", handleEscapeKey)
      }, [])

      const { register, handleSubmit } = useForm()

      const addTech = (data) => {
        createTech(data);
        setCreateTechModal(false)
      }

    return (
        <div role="dialog" className="modalOverlay" onClick={() => setCreateTechModal(false)}>
            <div className="modalBox" id="createTechModal" onClick={e => e.stopPropagation()}>
                <div className="createTechModal-header">
                    <h3>Cadastrar Tecnologia</h3>
                    <button onClick={handleCloseModal}>X</button>
                </div>

                <form className="createTechModal-main" onSubmit={handleSubmit(addTech)}>
                    <label>Nome</label>
                    <input type="text" {...register("title")}/>
                    <label>Selecionar status</label>
                    <select {...register("status")}>
                        <option>Iniciante</option>
                        <option>Intermediário</option>
                        <option>Avançado</option>
                    </select>

                    <button type="submit">Cadastrar Tecnologia</button>
                </form>
            </div>
        </div>
    )
}