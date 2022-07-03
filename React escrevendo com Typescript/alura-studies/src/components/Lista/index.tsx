import React from 'react';
import style from './Lista.module.scss'

function Lista() {
    const tarefas = [
        {
            titulo: 'React',
            tempo: '02:00:00'
        },
        {
            titulo: 'Javascript',
            tempo: '01:00:00'
        },
        {
            titulo: 'Typescript',
            tempo: '03:00:00'
        },
    ];

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li className={style.item} key={index}><h3>{tarefa.titulo}</h3><span>{tarefa.tempo}</span></li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;