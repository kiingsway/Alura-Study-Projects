import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPenToSquare, faCircleXmark} from '@fortawesome/free-solid-svg-icons'

const atvInicial = {
  Id: 0,
  Title: "",
  Priority: 0,
  Description: ""
}

export default function Formulario(props: any) {
  
  const [atividade, setAtividade] = useState<any>(atividadeAtual());

  useEffect(() => {
    props.ativSelecionada.Id !== 0 && setAtividade(props.ativSelecionada)

  },[props.ativSelecionada]);
  

  const inputTextHandler = (e: any) => {
    const {name, value} = e.target;

    setAtividade({...atividade, [name]: value})
  }

  function atividadeAtual() {

    const atvAtual = props.ativSelecionada.Id !== 0 ? props.ativSelecionada : atvInicial
    return atvAtual
    
  }

  function handleCancelar() {
    setAtividade(atvInicial);
  }

  //props.ativSelecionada ? props.ativSelecionada.Id : props.atividades.slice(-1)[0]?.Id + 1

  return (

    <form className="row g-3">

      <div className="col-md-1">
        <label htmlFor="txtId" className="form-label">ID</label>
        <input
          id="txtId"
          name="Id"
          onChange={inputTextHandler}
          type="number"
          min={1}
          className="form-control"
          title='ID da atividade...'
          value={atividade.Id}
          />
      </div>

      <div className="col">
        <label htmlFor="txtTitle" className="form-label">Título</label>
        <input
          id="txtTitle"
          name='Title'
          onChange={inputTextHandler}
          type="text"
          className="form-control"
          placeholder='Título da atividade...'
          value={atividade.Title}
        />
      </div>

      <div className="col-md-4">
        <label htmlFor="slcPriority" className="form-label">Prioridade</label>
        <select
          id="slcPriority"
          name='Priority'
          onChange={inputTextHandler}
          className="form-select"
          value={atividade.Priority}
        >
          <option defaultValue={0}>Selecionar...</option>
          {props.priorities.map((p: any) => (<option value={p.Id} key={p.Id}>{p.Title}</option>))}
        </select>
      </div>

      <div className="col-md-12">
        <label htmlFor="txtDescription" className="form-label">Descrição</label>
        <textarea
          id='txtDescription'
          name='Description'
          onChange={inputTextHandler}
          className='form-control'
          placeholder='Descrição da atividade...'
          value={atividade.Description}
          >
            {atividade.Description}
          </textarea>
      </div>

      <div className="col-12">
        {
          atividade.Id === 0 ?
          <button className='btn btn-outline-secondary' onClick={props.addAtividade}><FontAwesomeIcon icon={faPlus} className='me-2' />Atividade</button>
          :
          <>
            <button className='btn btn-outline-success me-2' type='submit'><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Atualizar #{atividade.Id}</button>
            <button className='btn btn-outline-danger' onClick={handleCancelar}><FontAwesomeIcon icon={faCircleXmark} className='me-2' />Cancelar edição</button>
          </>
        }
      </div>
      
    </form>
  )
}