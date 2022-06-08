import './Nav.css';
import Imagem from '../assets/image.png';
import lupa from '../assets/lupa.png';

const Nav = () =>{
    return(
        <>
      
        <div className='imagempro'>
        <img src={Imagem}/>
    </div>

    <div className='search'>
        <input type='text' placeholder='Pesquise um ponto turistico..'></input>
        <img src={lupa} width='15'/>
    </div>
    </>
    )
}
export default Nav;