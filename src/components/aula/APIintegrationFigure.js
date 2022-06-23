import { useEffect, useState } from "react";
import FormsFigure from '../aula/FormFigure';
import {BsTrash} from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
import {BsTrash as IconTrash} from "react-icons/bs"
import {TiEdit as IconEdit} from 'react-icons/ti'
import "./APIIntegration.css";
import ControlledCarousel from '../Carousel';
import { Figure } from "react-bootstrap";
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
      {figure && (
          <>
  <div className="figur">
  <Figure>
  <div key={figure.id}>
    <Figure.Image
      src={`/assets/${figure.foto}`}
      alt="171x180"
    />
    <div className='letras'>
    <Figure.Caption>
    <p>{figure.nome}</p>     
    </Figure.Caption>
    <Figure.Caption>
    <p>{figure.nome2}</p>     
    </Figure.Caption>
    <Figure.Caption>
    <p>{figure.nome3}</p>     
    </Figure.Caption>
    <Figure.Caption>
    <p>{figure.nome4}</p>     
    </Figure.Caption>
    </div>
    </div>
  </Figure>
  </div>
  </>
    )
}
</>
    )
}



export default APIIntegrationFigure;