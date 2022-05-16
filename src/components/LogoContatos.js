import './LogoContatos.css';
import Lupa from '../assets/lupa.png';
import { Link } from 'react-router-dom';


const LogoC = () => {
    return(
        <div className="superior">
            <h1>Turistic</h1>
            <ul>
                <li>
                    <Link 
                    to='/'
                    >
                        HOME
                    </Link>
                    </li>
                <li className='cont'>
                    <Link 
                    to='/contatos'
                    >
                        CONTATOS
                    </Link>
                    
                </li>
            </ul>
            <input type="text" placeholder="     Pesquise um ponto turístico.."></input>
            <img src={Lupa} alt="luislindo" />
        </div>
    )
};
export default LogoC;