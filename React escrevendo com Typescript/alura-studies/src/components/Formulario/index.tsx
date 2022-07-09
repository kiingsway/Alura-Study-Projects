import React, { useState } from 'react';
import ITarefa from '../../types/tarefa';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({setTarefas}:Props) {

    const [titulo, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function addTarefa(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault();
        setTarefas(tarefasAntigas =>
            [
                ...tarefasAntigas,
                {
                    titulo,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        )
        setTarefa("");
        setTempo("00:00");
    }
    
    return (
        <form className={style.novaTarefa} onSubmit={addTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="titulo">Adicione um novo estudo</label>
                <input
                    type="text"
                    name='titulo'
                    id='titulo'
                    placeholder='O que você quer estudar?'
                    value={titulo}
                    onChange={ev => setTarefa(ev.target.value)}
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
                    value={tempo}
                    onChange={ev => setTempo(ev.target.value)}
                    required
                />

            </div>
            <Botao type="submit">Adicionar</Botao>
        </form>
    )
}

export default Formulario;