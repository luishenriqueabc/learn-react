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
    <div className='d-flex justify-content-center'>
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
    </div>
    </>
    )
    };
export default Abreviacaoo;