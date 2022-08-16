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

    if (props.ativSelecionada.Id !== 0) {

      // Se a atividade selecionada ainda existir na array de Atividades, selecione a atividade selecionada. Caso não tenha, volte ao estado inicial.
      props.atividades.some((e: any) => e.Id === props.ativSelecionada.Id) ? setAtividade(props.ativSelecionada) : setAtividade(atvInicial)

    } else setAtividade(atvInicial)

    // Rodar em caso de mudanças na Atividade Selecionada ou em todas as Atividades
  },[props.ativSelecionada, props.atividades]);
  

  const inputTextHandler = (e: any) => {
    let {name, value} = e.target;

    value = name === 'Priority' ? parseInt(value) : value;

    setAtividade({...atividade, [name]: value})
  }

  function atividadeAtual() {

    const atvAtual = props.ativSelecionada.Id !== 0 ? props.ativSelecionada : atvInicial
    return atvAtual
    
  }

  function handleCancelar(e: any) {
    e.preventDefault();
    props.cancelarAtividade();
    setAtividade(atvInicial);
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    atividade.Id = parseInt(atividade.Id);

    props.ativSelecionada.Id !== 0 ? props.editAtividade(atividade) : props.addAtividade(atividade)

    setAtividade(atvInicial);
    
  }

  return (

    <form className="row g-3" onSubmit={handleSubmit}>

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
          <button type='submit' className='btn btn-outline-secondary'><FontAwesomeIcon icon={faPlus} className='me-2' />Atividade</button>
          :
          <>
            <button type='submit' className='btn btn-outline-success me-2'><FontAwesomeIcon icon={faPenToSquare} className='me-2' />Atualizar #{atividade.Id}</button>
            <button className='btn btn-outline-danger' onClick={handleCancelar}><FontAwesomeIcon icon={faCircleXmark} className='me-2' />Cancelar edição</button>
          </>
        }
      </div>
      
    </form>
  )
}