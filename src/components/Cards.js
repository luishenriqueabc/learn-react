import './Cards.css';
import SP from '../assets/pexels.jpeg';
import ControlledCarousel from './Carousel';



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

        <form>
            <div className='barra'>    
                <input  type="text" name="name" placeholder='Digite seu nome..'/> 
            </div>
            <div className='coment'>
                <input  type="comment" name="comment" placeholder='Deixe seu comentário..'/>
            </div>
            <div className='comentarios'>
                <input  type="comment" name="comment" placeholder=''/>
            <div className='enviar'>
                <input type="submit" value="enviar" />
            </div>
            </div>
        </form>
        </div>
        </div>
        </div>
        </>
    )
};
export default Cards;