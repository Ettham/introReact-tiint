import { useEffect, useState } from 'react'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'

function App() {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then((res) => res.json())
      .then((res)=>setCharacters(res))
      .catch((err) => console.error('Erro na Api:', err))
  }, [])

  return (
    <div className='App'>
      <Header />
      <Body characters={characters} />

    </div>
  )
}

export default App
