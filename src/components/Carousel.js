import './Carousel.css';
import {Carousel} from 'react-bootstrap';
import {useState } from 'react';
import imagem from '../assets/pexels.jpeg';
import idm from '../assets/idm.jpeg';
import ida from '../assets/ida.jpeg';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
          <div className='carousel'> 
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item >
          <img
            className="d-block"
            src={imagem}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={idm}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={ida}
            alt="Third slide"
          />
  
         
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  
  export default ControlledCarousel ;