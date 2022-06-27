import { useEffect, useState } from "react";
import FormsFigure from '../aula/FormFigure';
import "../Figure.css";
import LogoADM from '../LogoADM';
import {TiEdit as IconEdit} from 'react-icons/ti'
import {BsTrash as IconTrash} from "react-icons/bs"
import {Figure} from 'react-bootstrap'
import {useNavigate, UseNavigate} from 'react-router-dom';
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
<>
    {figure &&
    figure.map((figure) => {
    return (
        <div className="figur">
        <Figure>
             <IconTrash onClick={() => handleTrashClick(figure.id)}
    style={{cursor: 'pointer', color:'black',marginLeft:'auto', marginRight:'auto'}}/>
    <IconEdit onClick={() => navigate('/figureadm/'+figure.id)}
    style={{cursor: 'pointer',  color:'black', marginLeft:'auto', marginRight:'auto'}}>
    </IconEdit>
        <div key={figure.id}>
          <Figure.Image
          src={`/assets/${figure.foto}`}
          alt="171x180"
          />
        <div className='letras'>
        <Figure.Caption>
        <p onClick={() => navigate('/pag1:paginapontosId')}>{figure.nome}</p>     
        </Figure.Caption>
        <Figure.Caption>
        <p  onClick={() => navigate('/pag2:paginapontosId')}>{figure.nome2}</p>     
        </Figure.Caption>
        <Figure.Caption>
        <p  onClick={() => navigate('/pag3:paginapontosId')}>{figure.nome3}</p>     
        </Figure.Caption>
        <Figure.Caption>
        <p  onClick={() => navigate('/pag4:paginapontosId')}>{figure.nome4}</p>     
        </Figure.Caption>
        </div>
        </div>
        </Figure>
        </div>
    )
    }
    )}
   </>
    <Footer />
    </>
    )
    }
export default APIIntegrationFigure;