import React, { useEffect, useState } from 'react';
import './App.css';

// Video: https://www.youtube.com/watch?v=kCpca2z2cls&ab_channel=Rocketseat

interface Repo {
  name: string
  desc: string
}

function App() {

  const [repos, setRepos] = useState<Repo[]>([])
  // const [filteredRepos, setFilteredRepos] = useState<Repo[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/kiingsway/repos')
      .then(r => r.json())
      .then(d => setRepos(d))
  }, [])

  const filteredRepos = search.length > 0
  ? repos.filter(repo => repo.name.includes(search))
  : repos

  console.log('Renderizou')

  return (
    <div>
      <input
        name='search'
        type="text"
        placeholder='Buscar...'
        onChange={e => setSearch(e.target.value)}
        value={search}
      />

      <ul>
        {filteredRepos.map(repo => {
          return (
            <li key={repo.name}>
              {repo.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App;
