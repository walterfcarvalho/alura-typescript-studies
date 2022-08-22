import { ITarefa } from "../../Types/ITarefa";
import Item from "./Item";
import style from './Lista.module.scss'

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

const Lista = ( props : Props) => {

  return <aside className={style.listaTarefas} >
    <h2 > estudos do dia </h2>
    <ul>
      {props.tarefas.map((item: ITarefa) => (
        <Item
          key={item.id}
          {...item}
          selecionaTarefa={props.selecionaTarefa} 
        />
      ))}
    </ul>

  </aside>
}

export default Lista; 