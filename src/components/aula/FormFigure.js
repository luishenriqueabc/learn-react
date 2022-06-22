import { useRef, useEffect} from 'react'
import './FormsTuristic.css';

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
    <form className='aba' onSubmit={(event) => handleSubmit(event)}>
   <label>Foto: </label> <input  ref={fotoRef} type="text" name="foto"/>
   <label>Nome : </label><input ref={nomeRef} type="text" name="nome"/>
   <label>Nome 2: </label><input ref={nome2Ref} type="text" name="nome2"/>
   <label>Nome 3 : </label><input ref={nome3Ref} type="text" name="nome3"/>
   <label>Nome 4: </label><input ref={nome4Ref} type="text" name="nome4"/>
  
      <input type="submit" value="Enviar" />
    </form>
  )
}

export default FormFigure;