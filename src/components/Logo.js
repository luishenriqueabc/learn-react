import './Logo.css';
import Lupa from '../assets/lupa.png';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


const Logo = () => {
    return(
        <div className="superior">
            <h1>Turistic</h1>
            <ul>
            <Nav variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link eventKey="/"><Link to='/home'>HOME</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/contatos">CONTATOS</Nav.Link>
  </Nav.Item>    
  </Nav>      
            </ul>
        </div>
    )
};
export default Logo;

