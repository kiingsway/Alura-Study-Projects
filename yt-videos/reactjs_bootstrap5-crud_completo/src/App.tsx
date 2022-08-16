import React, { useState } from 'react';
import { faBell, faDownLong, faCircle, faExclamation } from '@fortawesome/free-solid-svg-icons'

// https://www.youtube.com/watch?v=PdUdXXvByyE&t=0s

import './App.css';
import Formulario from './pages/Formulario';
import Atividades from './pages/Atividades';

const priorities = [
  { Id: 1, Title: 'Urgente!', Icon: faBell, Color: 'danger' },
  { Id: 2, Title: 'Alta', Icon: faExclamation, Color: 'warning' },
  { Id: 3, Title: 'Média', Icon: faCircle, Color: 'dark' },
  { Id: 4, Title: 'Baixa', Icon: faDownLong, Color: 'secondary' }
]

interface IAtividade {
  Id: number,
  Title: string | undefined,
  Priority: number,
  Description: string | undefined
};

interface IAtividades extends Array<IAtividade>{};


function App() {
  const [atividades, setAtividades] = useState<IAtividades>([]);
  const [atividade, setAtividade] = useState({Id:0});

  function addAtividade(ativ: IAtividade) {

    ativ.Id = atividades.length > 0 ? atividades.slice(-1)[0]['Id'] + 1 : 1;
    
    setAtividades([...atividades, { ...ativ }]);

  }

  function delAtividade (IdAtividade: number) {
    setAtividades(atividades.filter(atv => atv.Id !== IdAtividade));
  }

  function obterAtividade (IdAtividade: number) {
    setAtividade(atividades.filter(atv => atv.Id === IdAtividade)[0]);
  }

  function editAtividade (ativ: IAtividade) {
    cancelarAtividade()
    setAtividades(atividades.map(item => item['Id'] === ativ['Id'] ? ativ : item));
  }

  function cancelarAtividade() {
    setAtividade({Id:0})
  }

  return (
    <div className='mt-3'>

      <Formulario
        addAtividade={addAtividade}
        editAtividade={editAtividade}
        cancelarAtividade={cancelarAtividade}
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