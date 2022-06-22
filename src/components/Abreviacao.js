import './Abreviacao.css';
import { useEffect, useState } from 'react';
import FigureController from './Figure';

const Abreviacaoo = (figureId) =>{
    const [figure, setFigure] = useState(null);
    useEffect(() =>{
    fetch("http://localhost/LP2/api/figure/select-all")
    .then((response) => response.json())
    .then((data) => setFigure(data))
    }, [])   
    return(
    <>
    <div className="abrevi">
    <h1>Cidades</h1>
    </div>
    {figure &&
    figure.map((figure) => {
    return(
    <>
    <div key={figure.id}>
    <FigureController figureId={figure.id}/>
    </div>
    </>
    )
    })}
    </>
    )
    };
export default Abreviacaoo;