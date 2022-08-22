import { useState } from 'react'
import style from './App.module.scss'
import Formulario from "../components/Formulario"
import Lista from "../components/Lista"
import Cronometro from "../components/Cronometro"
import { ITarefa } from "../Types/ITarefa"


function App() {

  const [tarefas, setxTarefas] = useState<ITarefa[]>([])
  const [selecionado, setSelecionado] = useState<ITarefa>()

  function selecionaTarefa(tarefaSelecionada: ITarefa) {

    setSelecionado(tarefaSelecionada);

    let aux = Object.assign([], ...tarefas)

    setxTarefas((tarefasOld: ITarefa[]) => tarefasOld.map((item: ITarefa) => ({
      ...item,
      selecionado: tarefaSelecionada.id === item.id ? true : false
    })))
  }

  function finalizaTarefa() {
    if (selecionado) {
      setxTarefas(oldState =>
        oldState.map(item => {
          if (item.id === selecionado.id) {
            return {
              ...item, completado: true
            }
          }
          return item
        })
        )
      setSelecionado(undefined)
    }
  }


  return (
    <div className={style.AppStyle}>

      <Formulario setTarefas={setxTarefas} />

      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />

      <Cronometro
        selecionado={selecionado}
        finalizarTarefa={finalizaTarefa}
      />

    </div>
  )
}

export default App 
