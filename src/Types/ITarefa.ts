export interface ITarefa{
  tarefa:string,
  tempo:string,
  selecionado:boolean, 
  completado:boolean,
  id: string
}


export interface IPropTarefa extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}
