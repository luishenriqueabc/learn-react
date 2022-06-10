import {Figure} from 'react-bootstrap';
import './Figure.css';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
const FiguresController = () =>{

  const [figure, setFigure] = useState(null);
  const navigate = useNavigate();

  
  useEffect(() => {
      fetch("http://localhost/lp2/api/figure/select-all")
          .then((response) => response.json())
          .then((data) => setFigure(data));
         
  }, []);

    return(
      <>
      
      {figure &&
        figure.map((figure) => {
          return (
            <div key={figure.id}>
              <h1>{figure.foto}</h1>
              <p>{figure.nome}</p>
              </div>
          )
        })
      }
</>

    )
}
export default FiguresController;