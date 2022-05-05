import './Logo.css';
import Lupa from '../assets/lupa.png';

const Logo = () => {
    return(
        <div className="superior">
            <h1>Turistic</h1>
            <ul>
                <li><a href="#">HOME</a></li>
                <li> <a href="#">CONTATOS</a></li>
            </ul>
            <input type="text" placeholder="     Pesquise um ponto turístico.."></input>
            <img src={Lupa} alt="luislindo" />
        </div>
    )
};
export default Logo;

