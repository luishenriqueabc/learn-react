import './Logo.css';
import Lupa from '../assets/lupa.png';

const Logo = () => {
    return(
        <div className="superior">
            <h1>Turistic</h1>
            <ul>
                <a href="#"><li>HOME</li></a>
                <a href="#"><li>CONTATOS</li></a>
            </ul>
            <input type="text" placeholder="Pesquise um ponto turístico.."></input>
            <img src={Lupa} alt="luislindo" />
        </div>
    )
};
export default Logo;

