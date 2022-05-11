import {Figure} from 'react-bootstrap';
import './Figure.css';
import ceara from '../assets/ceara.jpeg';
const FiguresController = () =>{
    return(
<>
<div className="abxc">
  <div className="figur">
  <Figure>
    <Figure.Image
      width={500}
      height={180}
      src={ceara}
      alt="171x180"
    />
    <Figure.Caption>
      Minas
    </Figure.Caption>
  </Figure>

  <Figure>
    <Figure.Image
      width={500}
      height={400}
      alt="171x180"
      src={ceara}
    />
    <Figure.Caption>
    Ceara
    </Figure.Caption>
  </Figure>

  <Figure>
    <Figure.Image
      width={500}
      height={180}
      alt="171x180"
      src={ceara}
    />
    <Figure.Caption>
    Cear
    </Figure.Caption>
  </Figure>

  <Figure>
    <Figure.Image
      width={500}
      height={180}
      alt="171x180"
      src={ceara}
    />
    <Figure.Caption>
    Ceara
    </Figure.Caption>
  </Figure>
  </div>
</div>
</>
  )
};

export default FiguresController;