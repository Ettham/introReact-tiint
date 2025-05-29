import './Body.css'
function Body(props) {


  return (
    <div className='Body'>
      <div className='grid'>

        {props.characters?.map((charaters) => (
          <div className="card">
            {charaters.image ? (
              <img src={charaters.image} alt={charaters.name} />
            ) : (
              <div className="noImage">imagem indisponivel</div>
            )
            }
            <h2>{charaters.name}</h2>
            <p>
              <strong>casa</strong>{charaters.house || "Desconhecido"}
            </p>
          </div>
        )

        )}
      </div>

    </div>
  )

}

export default Body