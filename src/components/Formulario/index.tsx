import React, { useState } from "react";
import { ITarefa } from "../../Types/ITarefa";
import Botao from '../Botao'
import style from './Formulario.module.scss'
import { v4 as uuidv4 } from 'uuid'
import { timingSafeEqual } from "crypto";

const stateEmpty: ITarefa = {
  tarefa: "",
  tempo: "00:00:00",
  selecionado: false,
  completado: false,
  id: uuidv4()
}

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

const Formulario = ({ setTarefas }: Props) => {
  const [task, setTask] = useState<ITarefa>(stateEmpty)

  const handleField = (e: React.ChangeEvent<HTMLInputElement>)=> {
    setTask( (old:ITarefa) => 
      ({...old, [e.target.name]:e.target.value})
    )
  }

  const addTarefa = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setTarefas((tarefasOld:ITarefa[]) => {
      
      tarefasOld.push(task)

      return [...tarefasOld]
    })

    setTask({...stateEmpty})

  }


  return (
    <form className={style.novaTarefa} onSubmit={addTarefa}  >
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Adicione um novo estudo:
        </label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar"
          required
          value={task.tarefa}
          onChange={handleField}
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">
          Tempo
        </label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
          value={task.tempo}
          onChange={handleField}

        />        </div>
      <Botao type="submit" texto="Add" />
    </form>
  )
}


export default Formulario
