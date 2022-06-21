import './Carousel.css';
import {Carousel} from 'react-bootstrap';
import {useState } from 'react';
import {useEffect } from 'react';
// import teste from '../assets/teste.jpeg';

function ControlledCarouselFigure({postId}) {
    const [index, setIndex] = useState(0);
    const [figure, setFigure] = useState(null);
  
    
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      
    };

    useEffect(() => {
      fetch("http://localhost/LP2/api/figure/select-by-id/?id=" + postId)
      .then((response) => response.json())
      .then((data) => setFigure(data))
    }, [postId])

    return (
      <> 
      {figure && (
        <>
        <div key={figure.id}>
        <div className='carousel'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item >
          <img
            className="d-block"
            src={`/assets/${figure.foto}`}
            
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block"
            src={`/assets/${figure.foto2}`}
            
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block"
            src={`/assets/${figure.foto3}`}
            
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
  export default ControlledCarouselFigure;