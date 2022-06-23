import { useEffect, useState } from "react";
import FormsFigure from '../aula/FormFigure';
import {BsTrash} from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
import {BsTrash as IconTrash} from "react-icons/bs"
import {TiEdit as IconEdit} from 'react-icons/ti'
import "./APIIntegration.css";
import ControlledCarousel from '../Carousel';
import Form from '../Form';
import LogoADM from '../LogoADM';
import Footer from '../Footer';


    const APIIntegrationFigure = () => {
    const [figure, setFigure] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
    fetch("http://localhost/lp2/api/figure/select-all")
    .then((response) => response.json())
    .then((data) => setFigure(data));   
    }, []);
    const handleTrashClick = (figureId) => {
    const formData = new FormData();
    formData.append('id', figureId);
    const urlDelete = "http://localhost/lp2/api/figure/delete";
    fetch(urlDelete, {
    method: 'POST',
    body: formData
    })
    .then((response) => response.json())
    .then((data) => {
    alert(data.message)
    let figureFiltered = figure.filter(function(figure){ 
    return figure.id !== figureId;
    });
    setFigure(figureFiltered)
    });
    }  
    return (
    <>
    <LogoADM />
    <h1> ADMIN FIGURE</h1>
    <div className="form">
    <FormsFigure setFigure={setFigure} figure={figure}/>
    </div>
    <div className='cs'>
    {figure &&
    figure.map((figure) => {
    return (
    <div key={figure.id}>
    <div className='card'>
    <IconTrash onClick={() => handleTrashClick(figure.id)}
    style={{cursor: 'pointer', color:'black',marginLeft:'auto', marginRight:'auto'}}/>
    <IconEdit onClick={() => navigate('/figureadm/'+figure.id)}
    style={{cursor: 'pointer',  color:'black', marginLeft:'auto', marginRight:'auto'}}>
    </IconEdit>
    <h1>{figure.foto}</h1>
    <h1>{figure.nome}</h1>
    <h1>{figure.nome2}</h1>
    <h1>{figure.nome3}</h1>
    <h1>{figure.nome4}</h1>
    </div>
    </div>
    )
    }
    )}
    </div>
    <Footer />
    </>
    )
    }
export default APIIntegrationFigure;