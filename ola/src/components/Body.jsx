import { useState } from 'react'
import './Body.css'

function Body() {
  const[cont, setCont] = useState(0)
  const[inputValor, setinputValor] = useState('')
  const[inputN1, setInputN1] = useState('')
  const[inputN2, setInputN2] = useState('')

  function aumentar(){
    setCont(cont + 1)
  }

  function desminuir(){
    if( cont > 0){
      setCont(cont - 1)
    }
  }

    function alterar(){
      setCont(Number(inputValor))
    }

    function somas(){
      setCont(Number(inputN1) + Number(inputN2))
    }

    function restas(){
      setCont(inputN1 - inputN2)
    }

    function multiplicacao (){
      setCont(inputN1 * inputN2)
    }

  return (
    <div className='Body'>
        <h2 className='titulo2'>Dinos são legais</h2>
        <div className='cont'>
        <button onClick={desminuir}>-</button>
        <p>contagem: {cont}</p>
       <button onClick={aumentar}>+</button>
        </div>

        <div className="from">
          <input type="number"
          value={inputValor}
          onChange={(e) => setinputValor(e.target.value)}
          />
          <button onClick={alterar}>alterar</button>
        </div>

        <div className="calculadera">
          <input type="text"
            value={inputN1}
            onChange={(e) => setInputN1(e.target.value)}
          />

          <button onClick={somas}>+</button>
          <button onClick={restas}>-</button>
          <button onClick={multiplicacao}>*</button>

          <input type="text"
          value={inputN2}
          onChange={(e) => setInputN2(e.target.value)}
          />
        </div>
    </div>
  )
}

export default Body