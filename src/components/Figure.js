import {Figure} from 'react-bootstrap';
import './Figure.css';
import ama from '../assets/ama.jpeg';
import bh from '../assets/bh.jpeg';
import camp from '../assets/camp.jpeg';
import minas from '../assets/minas.jpeg';
const FiguresController = () =>{
    return(
<>
<div className="abxc">
  <div className="figur">
  <Figure>
    <Figure.Image
      width={500}
      height={180}
      src={minas}
      alt="171x180"
    />
    <div className='letras'>
    <Figure.Caption>
      Minas Gerais
    </Figure.Caption>
    </div>
  </Figure>

  <Figure>
    <Figure.Image
      width={500}
      height={400}
      alt="171x180"
      src={ama}
    />
     <div className='letras'>
    <Figure.Caption>
    Amazonas
    </Figure.Caption>
    </div>
  </Figure>

  <Figure>
    <Figure.Image
      width={500}
      height={180}
      alt="171x180"
      src={camp}
    />
     <div className='letras'>
    <Figure.Caption>
    Campos do Jordão
    </Figure.Caption>
    </div>
  </Figure>

  <Figure>
    <Figure.Image
      width={500}
      height={180}
      alt="171x180"
      src={bh}
    />
     <div className='letras'>
    <Figure.Caption>
    Belo Horizonte
    </Figure.Caption>
    </div>
  </Figure>
  </div>
</div>
</>
  )
};

export default FiguresController;