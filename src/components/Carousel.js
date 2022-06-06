import './Carousel.css';
import {Carousel} from 'react-bootstrap';
import {useState } from 'react';
import {useEffect } from 'react';
import teste from '../assets/teste.jpeg';


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
            src={teste}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={teste}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={teste}
            alt="Third slide"
          />
  
         
        </Carousel.Item>
      </Carousel>
    </div>
    );
  }
  
  export default ControlledCarousel ;