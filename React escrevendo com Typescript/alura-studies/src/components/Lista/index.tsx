import React, { useState } from 'react';
import style from './Lista.module.scss'
import Item from './Item';

function Lista() {
    let [tarefas, setTarefas] = useState([
        {
          titulo: 'React',
          tempo: "02:00:00"
        },
        {
          titulo: 'Javascript',
          tempo: "01:00:00"
        },
        {
          titulo: 'Typescript',
          tempo: "03:00:00"
        }
      ]);

    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTarefas([...tarefas, {titulo: 'Estudar estados', tempo: '05:15:20'}]);
                console.log('clicado')
            }}>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <Item key={index} {...tarefa}/>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;