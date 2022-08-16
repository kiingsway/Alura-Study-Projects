import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faQuestion, faTrashCan } from '@fortawesome/free-solid-svg-icons'

interface Props {
  priority: any
  atividade: any
  delAtividade(IdAtividade: number): any
  obterAtividade(IdAtividade: number): any
}

export default function Atividade(props: Props) {
  return (
    <div className={`card mb-2 shadow-sm border border-${props.priority?.Color}`}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge rounded-pill text-bg-secondary me-2">#{props.atividade.Id}</span>
            {props.atividade.Title}
          </h5>
          <h6>
            Prioridade:
            <span className={`badge text-bg-${props.priority?.Color} ms-2`}>
              <FontAwesomeIcon icon={props.priority.Icon || faQuestion} className='me-2' />
              {props.priority.Title}
            </span>
            
          </h6>
        </div>
        <p className="card-text">{props.atividade?.Description}</p>
        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button
            className="btn btn-sm btn-outline-danger me-2"
            onClick={() => props.delAtividade(props.atividade.Id)}>
            <FontAwesomeIcon icon={faTrashCan} className='me-2' />
            Deletar
          </button>
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => props.obterAtividade(props.atividade.Id)}>
            <FontAwesomeIcon icon={faPenToSquare} className='me-2' />
            Editar
          </button>
        </div>
      </div>
    </div>
  )
}
