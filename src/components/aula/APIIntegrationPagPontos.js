import { useEffect, useState } from "react";
import FormsPagPonto from '../aula/FormsPagPonto';
import {BsTrash} from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
import {BsTrash as IconTrash} from "react-icons/bs"
import {TiEdit as IconEdit} from 'react-icons/ti'
import "./APIIntegration.css";
import ControlledCarousel from '../Carousel';
import Form from '../Form';
import Logo from '../Logo';

    const APIIntegrationPagpontos = () => {
    const [paginapontos, setPaginaPontos] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
    fetch("http://localhost/lp2/api/paginapontos/select-all")
    .then((response) => response.json())
    .then((data) => setPaginaPontos(data));        
    }, []);
      
    const handleTrashClick = (PaginaPontosId) => {
    const formData = new FormData();
    formData.append('id', PaginaPontosId);
    const urlDelete = "http://localhost/lp2/api/paginapontos/delete";
    fetch(urlDelete, {
    method: 'POST',
    body: formData
    })
    .then((response) => response.json())
    .then((data) => {
    alert(data.message)
    let paginapontosFiltered = paginapontos.filter(function(paginapontos){ 
    return paginapontos.id !== PaginaPontosId;
    });
    setPaginaPontos(paginapontosFiltered)
    });
    }
    return (
    <>
    <Logo />
    <h1> ADMIN</h1>
    <div className="form">
    <FormsPagPonto setPaginaPontos={setPaginaPontos} paginapontos={paginapontos}/>
    </div>
    <div className='cs'>
    {paginapontos &&
      paginapontos.map((paginapontos) => {
      return (
        <div key={paginapontos.id}>
        <div className='card'>
        <IconTrash onClick={() => handleTrashClick(paginapontos.id)}
      style={{cursor: 'pointer', color:'black',marginLeft:'auto', marginRight:'auto'}}/>
        <IconEdit onClick={() => navigate('/pagadm'+paginapontos.id)}
      style={{cursor: 'pointer',  color:'black', marginLeft:'auto', marginRight:'auto'}}>
        </IconEdit>
        <ControlledCarousel  PaginaPontosId={paginapontos.id}/>
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
          <a href='https://www.decolar.com/pacotes/rio/pacotes-para-rio+de+janeiro?package_id=be8e62e9a1e10324e912bc3b3c22f49988055599591348c7598521b487e110fd&clickedPrice=BRL_1137&priceDate=1655724010474&searchId=d5036125d93c4692a56a44c822aeabe4'> <p>Quero!</p></a>
          </div>
          </div>
          <div className='comentariosss'>
            <h1>Comentarios</h1>
          </div>
            <Form/>
          </div>
          </div>  
            )
          })
        }
        </div>
        </>
      )
    }

export default APIIntegrationPagpontos;