import './Cards.css';
import SP from '../assets/pexels.jpeg';
import ControlledCarousel from './Carousel';
import ControlledCarouselrj from './Carouselrj';
import Form from './Form';



const Cards = () =>{
    return(
    <>
    <div className="cardsp">
        <div className="cardspinfo ">
            <ControlledCarousel />
        <div className="SPletters">
            <h3>São Paulo</h3>
        <div className="text">
            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.</p>
        </div>
        </div>
        
        {/* area de comentarios */}
        <div className='coment'>
        <Form />

    
        </div  >
        </div>
    </div>
    
    <div className="cardrj">
        <div className="cardrjinfo ">
            <ControlledCarouselrj />
        <div className="RJletters">
            <h3>Rio de Janeiro</h3>
        <div className="textrj">
            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.</p>
        </div>
        </div>

    {/* area de comentarios */}
    <div className='comentrj'>
        <Form />


    </div>
    </div>
</div>
    </>
)
};
export default Cards;