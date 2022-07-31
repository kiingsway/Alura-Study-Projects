import React from 'react'
import Atividade from './Atividade';

export default function Atividades(props: any) {
  return (
    <div className="my-3">
      {props.atividades.map((atividade: any) => {

        return <Atividade
          key={atividade.Id}
          atividade={atividade}
          priority={props.priorities.find((x: any) => x.Id === atividade.Priority)}
          delAtividade={props.delAtividade}
          obterAtividade={props.obterAtividade}
        />

      })}
    </div>
  )
}
