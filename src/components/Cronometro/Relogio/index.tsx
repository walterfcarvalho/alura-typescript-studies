import { segundosParaTempo } from "../../../commom/utils/time";
import style from './Relogio.module.scss'

interface Props {
  tempo: number | undefined;
}

export function Relogio({tempo = 0}: Props) {

  let myTime = segundosParaTempo(tempo)

  return <>
    <span className={style.relogioNumero}>{myTime[0]}</span>  
    <span className={style.relogioNumero}>{myTime[1]}</span>  
    <span className={style.relogioDivisao}>:</span>  
    <span className={style.relogioNumero}>{myTime[2]}</span>  
    <span className={style.relogioNumero}>{myTime[3]}</span>  
  </>
}