import './LogoADM.css';
import Lupa from '../assets/lupa.png';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


const Logo = () => {
    return(
        <div className="superiorr">
            <h1>Turistic</h1>
            <ul>
            <Nav variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/admin">ADMIN</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/pontosadm">Pontos ADM</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/figureadm">Figure ADM</Nav.Link>
  </Nav.Item>    
  <Nav.Item>
    <Nav.Link href="/commentadm">Comentario ADM</Nav.Link>
  </Nav.Item>    
  <Nav.Item>
    <Nav.Link href="/paginaadm">Pagina Pontos ADM</Nav.Link>
  </Nav.Item>    
  </Nav>      
            </ul>
        </div>
    )
};
export default Logo;

