import React from 'react'
import style from './Botao.module.scss'

interface Props {
  type?: "button" | "submit" | "reset" | undefined,
  texto: string,
  onClick?:() => void 
}

const Botao = ({type, texto, onClick}:Props) => {

  return (
    <button
      className={style.botao}
      type={type}
      onClick= {onClick}
    >
      {texto}    
    </button>
  )
}
 
export default Botao