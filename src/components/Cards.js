import './Cards.css';
import SP from '../assets/pexels.jpeg';
import ControlledCarousel from './Carousel';
import ControlledCarouselrj from './Carouselrj';
import Form from './Form';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'



const Cards = () =>{

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
                    <div className="cardrj">
                    <ControlledCarousel idPost={pontos.id}/>
                  <div key={pontos.id}>
                      <div className="SPletters">
                    <h3>{pontos.name}</h3>
                    </div>
                    <div className="text">
                    <p>{pontos.sobre}</p>
                    </div>
                </div>
            {/* area de comentarios */}
            <div className='coment'>
                    <Form />
                    </div>

                    </div>
                )
                
              })
            }
            </>
    )
}
export default Cards;