import './Cards.css';
import SP from '../assets/SP.jpg';
import {Carousel} from 'react-bootstrap';
import {useState} from 'react';

// import SP2 from './src/assets/sp.j';

const Cards = () =>{
    function ControlledCarousel() {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        }
        };
    return(
        <div className="Cardpai">
        <div className="Carouselcard">

    
            </div>

                <div className="SPletters">
                <h3>São Paulo</h3>
                <div className="text">
                               <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.</p>
                </div>
                </div>
            </div>
    )
};
export default Cards;