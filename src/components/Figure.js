
import './Figure.css';
import { useEffect, useState } from "react";
import {Figure} from 'react-bootstrap'
import {UseNavigate} from 'react-router-dom';
const FiguresController = ({figureId}) =>{

  const [figure, setFigure] = useState(null);



  
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
    <Figure.Image
      src={`/assets/${figure.foto}`}
      alt="171x180"
    />
    <div className='letras'>
    <Figure.Caption>
    <p>{figure.nome}</p>
    </Figure.Caption>
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