import {Figure} from 'react-bootstrap';
import './Figure.css';

const FiguresController = () =>{
    return(
<>
<Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="holder.js/171x180"
  />
  <Figure.Caption>
    Minas
  </Figure.Caption>
</Figure>

<Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="holder.js/171x180"
  />
  <Figure.Caption>
   Ceara
  </Figure.Caption>
</Figure>

<Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="holder.js/171x180"
  />
  <Figure.Caption>
   Ceara
  </Figure.Caption>
</Figure>

<Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="holder.js/171x180"
  />
  <Figure.Caption>
   Ceara
  </Figure.Caption>
</Figure>
</>
  )
};

export default FiguresController;