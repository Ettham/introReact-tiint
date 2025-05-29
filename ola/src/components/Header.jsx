import React from 'react'
import './Header.css'

function Header() {
  const [searchTerm, setSarchTerm] = React.useState('')
  return (
    <div className='Header'>
        <h1>buscador de personagens - harry potter</h1>
        <input
         type="text" 
         placeholder="Digite o nome..."
         value={searchTerm}
         onChange={(e) => setSarchTerm(e.target.value)}
         className='search'
         />
    </div>
  )
}

export default Header