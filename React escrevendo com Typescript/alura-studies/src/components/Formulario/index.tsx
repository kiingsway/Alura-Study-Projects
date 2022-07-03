import React from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';

class Formulario extends React.Component {
    state = {
        titulo: '',
        tempo: '00:00'
    }

    addTarefa(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault();
        console.log(this.state)
    }


    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.addTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input
                        type="text"
                        name='tarefa'
                        id='tarefa'
                        placeholder='O que você quer estudar?'
                        onChange={ev => this.setState({...this.state, titulo: ev.target.value})}
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        value={this.state.tempo}
                        onChange={ev => this.setState({...this.state, tempo: ev.target.value})}
                        required
                    />

                </div>
                <Botao>Adicionar</Botao>
            </form>
        )
    }
}

export default Formulario;