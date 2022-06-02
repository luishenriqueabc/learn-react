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
        fetch("`http://localhost/lp2/api/pontos/select-by-id/?id=29")
        .then((response) => response.json())
        .then((data) => setPontos(data))
    
    }, [])    


    return(
       
            {pontos ? (
            )
            
               
    )
}
export default Cards;