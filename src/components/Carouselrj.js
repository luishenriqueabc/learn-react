import './Carouselrj.css';
import {Carousel} from 'react-bootstrap';
import {useState } from 'react';
import RJ1 from '../assets/rj1.jpeg';
import RJ2 from '../assets/rj2.jpeg';
import RJ3 from '../assets/rj3.jpeg';

function ControlledCarouselrj({idPost}) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
          <div className='carouselrj'> 
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item >
          <img
            className="d-block"
            src={RJ1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={RJ2}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={RJ3}
            alt="Third slide"
          />
  
         
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  export default ControlledCarouselrj ;