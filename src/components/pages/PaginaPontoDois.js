import './PaginaPontoUm.css';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import Form from '../Form';
import ControlledCarouselPaginaPonto from '../CarouselPagPonto';
import Logo from '../Logo.js';
import Footer from '../Footer.js';

const PaginaPontoDois = (PaginaPontosId) =>{

    const [paginapontos, setPaginaPontos] = useState(null)
    const navigate = useNavigate();



    useEffect(() => {
        fetch("http://localhost/LP2/api/paginapontos/select-by-id/?id=16" + PaginaPontosId)
        .then((response) => response.json())
        .then((data) => setPaginaPontos(data))
      }, [PaginaPontosId])

    return(

        <>
        <Logo />
        {paginapontos && ( 
              <>
              <div key={paginapontos.id}>
              <div className='card'>
              <ControlledCarouselPaginaPonto PaginaPontosId={paginapontos.id}/>
              <div className='cardinfo'>
                <div className='nome'>
                <h1>{paginapontos.name}</h1>
                </div>
                <p>{paginapontos.sobre}</p>
                </div>
                <div className='pertence'>
                <h3>Pertence a qual cidade?</h3>
                <p>{paginapontos.pertence}</p>
                </div>
                <div className='quantas'>
                <h3>Quantas pessoas vão até lá?</h3>
                <p>{paginapontos.quantaspessoas}</p>
                </div>
                <div className='queriratela'>
                          <h3>Quer ir até lá?</h3>
                          <div className='Sim'>
                          <a href='/'> <p>Quero!</p></a>
                          </div>
                </div>
                <div className='comentariosss'>
                  <h1>Comentarios</h1>
                </div>
                <Form />
                </div>
                </div>
                <Footer/>
                </>
           )
        }
        </>
    )
}
export default PaginaPontoDois;