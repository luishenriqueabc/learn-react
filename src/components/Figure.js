
import './Figure.css';
import { useEffect, useState } from "react";
import {Figure} from 'react-bootstrap'
import {useNavigate, UseNavigate} from 'react-router-dom';
const FiguresController = ({figureId}) =>{

  const [figure, setFigure] = useState(null);
  const navigate = useNavigate();




  
  useEffect(() => {
    fetch("http://localhost/LP2/api/figure/select-by-id/?id=" + figureId)
    .then((response) => response.json())
    .then((data) => setFigure(data))
  }, [figureId])
  
    return(
      <>
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
export default FiguresController;