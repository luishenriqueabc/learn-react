import './Logo.css';
import Lupa from '../assets/lupa.png';
import { Link } from 'react-router-dom';


const Logo = () => {
    return(
        <div className="superior">
            <h1>Turistic</h1>
            <ul>
                <li className='home'>
                    <Link 
                    to='/'
                    >
                        HOME
                    </Link>
                    </li>
                <li>
                    <Link 
                    to='/contatos'
                    >
                        CONTATOS
                    </Link>
                    
                </li>
            </ul>
        </div>
    )
};
export default Logo;

