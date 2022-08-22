export const tempoParaSegundos = (tempo: string) => {

  const[horas='0', minutos='0', segundos='0'] =
  tempo.split(":") 

  const horaEmSegundos = Number(horas) * 3600 
  const minEmSegundos = Number(minutos)* 60

  return horaEmSegundos + minEmSegundos + Number(segundos)
}
 

export const segundosParaTempo = (tempo:number) => {

   const minutos = Math.floor(tempo  / 60)
   const segundos = tempo % 60

  return String(minutos).padStart(2, '0') + String(segundos).padStart(2, '0')

}
