import { Carousel } from 'bootstrap';
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ControlledCarousel from './Carousel'
import './PontoUm.css';


const PontoUm = () =>{
    const { PontosId } = useParams();
    const [pontos, setPontos] = useState();

    useEffect(() => {
        fetch("http://localhost/lp2/api/pontos/select-by-id/?id=45")
        .then((response) => {
        if (response.ok) {
        return response.json();
        }
        throw new Error(response.statusText);
        })
        .then((data) => setPontos(data))
        .catch((error) => {
        console.log(error);
        })
    }, []);
  
    return (
        <>
        {pontos? (
            <>
            <div className='card'>
                <ControlledCarousel/>
                <div key={pontos.id}>
                    <div className='cardinfo'>
                    <h1>{pontos.name}</h1>
                
                    <p>{pontos.sobre}</p>
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
                            <a href='/'> <p>Sim</p></a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </>

            )
        : 
            (<p>Usuário não encontrado!</p>)
        }
        </>
    )
}
export default PontoUm;