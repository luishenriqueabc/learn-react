import './PaginaPontoUm.css';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

const PaginaUm = (postId) =>{

    const [pontos, setPontos] = useState(null)
    const navigate = useNavigate();



    useEffect(() => {
        fetch("http://localhost/LP2/api/pontos/select-by-id/?id=1" + postId)
        .then((response) => response.json())
        .then((data) => setPontos(data))
      }, [postId])

    return(

        <>
        {pontos && ( 
              <>
              <div key={pontos.id}>
              <div className='card'>

              <div className='cardinfo'>
                <div className='nome'>
                <h1>{pontos.name}</h1>
                </div>
                <p>{pontos.sobre}</p>
                </div>
                <div className='pertence'>
                <h3>Pertence a qual cidade?</h3>
                <p>{pontos.pertence}</p>
                </div>
                <div className='quantas'>
                <h3>Quantas pessoas vão até lá?</h3>
                <p>{pontos.quantaspessoas}</p>
                </div>
                <div className='queriratela'>
                          <h3>Quer ir até lá?</h3>
                          <div className='Sim'>
                          <a href='/'> <p>Quero!</p></a>
                          </div>
                </div>
                <div className='comentariosss'>
                  <h1>Comentarios</h1>
                </div>
                 
                </div>
                </div>
                </>
           )
        }
        </>
    )
}
export default PaginaUm;