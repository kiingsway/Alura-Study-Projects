import React, { useState } from 'react';
import { faBell, faDownLong, faCircle, faExclamation } from '@fortawesome/free-solid-svg-icons'

// https://www.youtube.com/watch?v=PdUdXXvByyE&t=0s

import './App.css';
import Formulario from './pages/Formulario';
import Atividades from './pages/Atividades';

const initialAtvs = [
  {
    Id: 1,
    Title: "Chamado #1",
    Priority: 3,
    Description: "Nulla facilisis varius lectus sit amet rutrum. Vivamus efficitur convallis quam. Fusce sit amet semper diam. Praesent malesuada nibh eget sem tempor ornare. Nunc laoreet quam turpis, eget ullamcorper leo semper eu. Sed nisi tortor, ultricies ut commodo ut, finibus a mi. Duis elementum dignissim feugiat. Cras non suscipit tortor, aliquam sodales mi. Suspendisse tincidunt pretium nisl non eleifend. Sed pulvinar nisi a urna blandit, ac cursus orci consectetur. Quisque ac augue eget neque luctus facilisis. Aliquam placerat a urna sed tristique."
  },
  {
    Id: 2,
    Title: "Chamado #2",
    Priority: 2,
    Description: "Nulla facilisis varius lectus sit amet rutrum. Vivamus efficitur convallis quam. Fusce sit amet semper diam. Praesent malesuada nibh eget sem tempor ornare. Nunc laoreet quam turpis, eget ullamcorper leo semper eu. Sed nisi tortor, ultricies ut commodo ut, finibus a mi. Duis elementum dignissim feugiat. Cras non suscipit tortor, aliquam sodales mi. Suspendisse tincidunt pretium nisl non eleifend. Sed pulvinar nisi a urna blandit, ac cursus orci consectetur. Quisque ac augue eget neque luctus facilisis. Aliquam placerat a urna sed tristique."
  },
];

const priorities = [
  { Id: 1, Title: 'Urgente', Icon: faBell, Color: 'danger' },
  { Id: 2, Title: 'Alta', Icon: faExclamation, Color: 'warning' },
  { Id: 3, Title: 'Média', Icon: faCircle, Color: 'dark' },
  { Id: 4, Title: 'Baixa', Icon: faDownLong, Color: 'secondary' }
]

function App() {
  const [atividades, setAtividades] = useState(initialAtvs);
  const [atividade, setAtividade] = useState({Id:0});

  function addAtividade(e: any) {
    e.preventDefault();

    const atv = {
      Id: parseInt((document.getElementById('txtId') as HTMLInputElement).value),
      Title: (document.getElementById('txtTitle') as HTMLInputElement).value,
      Priority: parseInt((document.getElementById('slcPriority') as HTMLInputElement).value),
      Description: (document.getElementById('txtDescription') as HTMLInputElement).value
    };

    setAtividades([...atividades, { ...atv }]);

  }

  function delAtividade(IdAtividade: number) {
    setAtividades(atividades.filter(atv => atv.Id !== IdAtividade))
  }

  function obterAtividade (IdAtividade: number) {
    setAtividade(atividades.filter(atv => atv.Id === IdAtividade)[0]);
  }

  return (
    <div className='mt-3'>

      <Formulario
        addAtividade={addAtividade}
        atividades={atividades}
        priorities={priorities}
        ativSelecionada={atividade}
      />

      <hr />

      <Atividades
        atividades={atividades}
        priorities={priorities}
        delAtividade={delAtividade}
        obterAtividade={obterAtividade}
      />

    </div>
  );
}

export default App;