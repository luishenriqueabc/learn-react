import './Cards.css';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import ControlledCarousel from './Carousel';

const Cards = (PostId) =>{
    const [pontos, setPontos] = useState(null)
    const navigate = useNavigate();

    useEffect(() =>{
        fetch("http://localhost/LP2/api/pontos/select-all")
        .then((response) => response.json())
        .then((data) => setPontos(data))

    }, [])    


    return(
      <>
      {pontos &&
        pontos.map((pontos) => {
          return (
            <>
            <div key={pontos.id}>
            <div className='card'>
            <ControlledCarousel postId={pontos.id}/>
            <div className='cardinfo'>
              <h1>{pontos.name}</h1>
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
                            <a href='/'> <p>Sim</p></a>
                        </div>
              </div>
              </div>
              </div>
              </>
         )
        })
      }
      </>
    )
}
        


          export default Cards;