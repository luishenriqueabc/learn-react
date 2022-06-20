import './Carousel.css';
import {Carousel} from 'react-bootstrap';
import {useState } from 'react';
import {useEffect } from 'react';
// import teste from '../assets/teste.jpeg';

function ControlledCarouselPaginaPonto({postId}) {
    const [index, setIndex] = useState(0);
    const [paginaponto, setPaginaPontos] = useState(null);
  
    
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      
    };

    useEffect(() => {
      fetch("http://localhost/LP2/api/paginapontos/select-by-id/?id=" + postId)
      .then((response) => response.json())
      .then((data) => setPaginaPontos(data))
    }, [postId])

    return (
      <> 
      {paginaponto && (
        <>
        <div key={paginaponto.id}>
        <div className='carousel'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item >
          <img
            className="d-block"
            src={`/assets/${paginaponto.foto}`}
            
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block"
            src={`/assets/${paginaponto.foto2}`}
            
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block"
            src={`/assets/${paginaponto.foto3}`}
            
            alt="First slide"
          />
        </Carousel.Item>

      </Carousel>

        </div>
        </div>
        </>
      )}
    </>
    );
  }
  export default ControlledCarouselPaginaPonto ;