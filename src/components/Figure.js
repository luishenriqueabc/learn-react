
import './Figure.css';
import { useEffect, useState } from "react";
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
        <div key={figure.id}>
          <img src={`/assets/${figure.foto}`} alt="pardinho gay"/>
          <p>{figure.nome}</p>
          </div>
          <div className='2'>
          <img src={`/assets/${figure.foto}`} alt="pardinho gay"/>
          <p>{figure.nome}</p>
          </div>
      
     </>
    )
}
</>
)
}
export default FiguresController;