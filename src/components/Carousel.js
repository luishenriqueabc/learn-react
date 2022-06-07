import './Carousel.css';
import {Carousel} from 'react-bootstrap';
import {useState } from 'react';
import {useEffect } from 'react';
// import teste from '../assets/teste.jpeg';

function ControlledCarousel({postId}) {
    const [index, setIndex] = useState(0);
    const [ponto, setPontos] = useState(null);
  
    
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      
    };

    useEffect(() => {
      fetch("http://localhost/LP2/api/pontos/select-by-id/?id=" + postId)
      .then((response) => response.json())
      .then((data) => setPontos(data))
    }, [postId])

    return (
      <> 
      {ponto && (
        <>
        <div key={ponto.id}>
        <div className='carousel'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item >
          <img
            className="d-block"
            src={`/assets/${ponto.foto}`}
            
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block"
            src={`/assets/${ponto.foto2}`}
            
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block"
            src={`/assets/${ponto.foto3}`}
            
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
  export default ControlledCarousel ;