import Botao from "../Botao"
import style from './Cronometro.module.scss'
import { Relogio } from "./Relogio"
import { tempoParaSegundos } from "../../commom/utils/time"
import { ITarefa } from "../../Types/ITarefa"
import { useEffect, useState } from "react"

interface Props {
  selecionado: ITarefa | undefined,
  finalizarTarefa: () => void
}


export function Cronometro({selecionado, finalizarTarefa}: Props) {
  const [tempo, setTempo] = useState<number| undefined>(0)

  useEffect( () => {

    if (selecionado?.tempo) {
      setTempo(
        tempoParaSegundos(String(selecionado?.tempo))
      )
    }

  },[selecionado])

  const regressiva = (contador:number = 0) => {

    setTimeout( () => {
      if ( contador > 0 ){
        setTempo(contador -1 );
        return regressiva(contador -1)
      }
      finalizarTarefa()
    }, 1000)
  }

  
  return <div className={style.cronometro} >
      <p className={style.titulo} > Escolha um card e inicie o cronômetro </p>
      <p>tempo: {tempo}</p>
      <div className={style.relogioWrapper} >
        <Relogio
          tempo={tempo}
        
        ></Relogio>
      </div>
      <Botao 
        texto="Start" 
        onClick={() => regressiva(tempo)}
      />
    </div >
}

export default Cronometro  