import './Nav.css';
import Imagem from '../assets/image.png';

const Nav = () =>{
    return(
        <>
      
        <div className='imagempro'>
        <img src={Imagem}/>
    </div>

    <div className='search'>
        <input type='text' placeholder='Pesquise um ponto turistico..'></input>
    </div>
    </>
    )
}
export default Nav;