import { useEffect, useState } from "react";
import FormsTuristic from '../aula/FormsTuristic';
import {BsTrash} from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
import {BsTrash as IconTrash} from "react-icons/bs"
import {TiEdit as IconEdit} from 'react-icons/ti'
import "./APIIntegration.css";
import ControlledCarousel from '../Carousel';
import Form from '../Form';
import LogoADM from '../LogoADM';
import Footer from '../Footer';

    const APIIntegration = () => {
    const [pontos, setPontos] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
    fetch("http://localhost/lp2/api/pontos/select-all")
    .then((response) => response.json())
    .then((data) => setPontos(data));        
    }, []);
      
    const handleTrashClick = (pontosId) => {
    const formData = new FormData();
    formData.append('id', pontosId);
    const urlDelete = "http://localhost/lp2/api/pontos/delete";
    fetch(urlDelete, {
    method: 'POST',
    body: formData
    })
    .then((response) => response.json())
    .then((data) => {
    alert(data.message)
    let pontosFiltered = pontos.filter(function(pontos){ 
    return pontos.id !== pontosId;
    });
    setPontos(pontosFiltered)
    });
    }
    return (
    <>
    <LogoADM />
    <h1> ADMIN</h1>
    <div className="form">
    <FormsTuristic setPontos={setPontos} pontos={pontos}/>
    </div>
    <div className='cs'>
    {pontos &&
      pontos.map((pontos) => {
      return (
        <div key={pontos.id}>
        <div className='card'>
        <IconTrash onClick={() => handleTrashClick(pontos.id)}
      style={{cursor: 'pointer', color:'black',marginLeft:'auto', marginRight:'auto'}}/>
        <IconEdit onClick={() => navigate('../edit/'+pontos.id)}
      style={{cursor: 'pointer',  color:'black', marginLeft:'auto', marginRight:'auto'}}>
        </IconEdit>
        <ControlledCarousel postId={pontos.id}/>
        <div className='cardinfo'>
          <div className='nome'>
          <h1>{pontos.name}</h1>
          </div>
          <p>{pontos.sobre}</p>
          </div>
          <div className='pertence'>
          <h3>Pertence a qual cidade?</h3>
          <p>{pontos.pertence}</p>
          </div>
          <div className='quantas'>
          <h3>Quantas pessoas vão até lá?</h3>
          <p>{pontos.quantaspessoas}</p>
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
        <Footer />
        </>
      )
    }

export default APIIntegration;