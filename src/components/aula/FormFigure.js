import { useRef, useEffect} from 'react'
import './FormFigure.css';

const FormFigure = ({figure, setFigure}) => {
  const fotoRef = useRef();
  const nomeRef = useRef();
  const nome2Ref = useRef();
  const nome3Ref = useRef();
  const nome4Ref = useRef();
  

  useEffect(() => {
    nomeRef.current.focus()
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('foto', event.target[0].value);
    formData.append('nome', event.target[1].value);
    formData.append('nome2', event.target[2].value);
    formData.append('nome3', event.target[3].value);
    formData.append('nome4', event.target[4].value);
  
    fetch(
      "http://localhost/lp2/api/figure/create",
      {method: 'POST', body: formData}
      )
      .then((response) => response.json())
      .then((data) => {
        fotoRef.current.value = ''
        nomeRef.current.value = ''
        nome2Ref.current.value = ''
        nome3Ref.current.value = ''
        nome4Ref.current.value = ''
      
        nomeRef.current.focus()
        alert(data.message)
        setFigure([data.figure, ...figure])
      });
  } 

  return (
    <form className='abacaxi' onSubmit={(event) => handleSubmit(event)}>
    <input placeholder='Foto' ref={fotoRef} type="text" name="foto"/>
   <input placeholder='Nome'ref={nomeRef} type="text" name="nome"/>
   <input placeholder='Nome2'ref={nome2Ref} type="text" name="nome2"/>
   <input placeholder='Nome3' ref={nome3Ref} type="text" name="nome3"/>
   <input placeholder='Nome4'ref={nome4Ref} type="text" name="nome4"/>
  
   <input type="submit" value="Enviar"  style={{cursor: 'pointer',  color:'white',backgroundColor:'black'}}/>
    </form>
  )
}

export default FormFigure;