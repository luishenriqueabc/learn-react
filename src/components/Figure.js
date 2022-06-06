import {Figure} from 'react-bootstrap';
import './Figure.css';
import teste from '../assets/teste.jpeg';
const FiguresController = () =>{








    return(
<>
<div className="abxc">
  <div className="figur">
  <Figure>
    <Figure.Image
      width={500}
      height={180}
      src={teste}
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
      src={teste}
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
      src={teste}
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
      src={teste}
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