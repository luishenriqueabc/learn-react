import { useRef, useEffect} from 'react'
import './FormFigure.css';

const FormFigure = ({figure, setFigure}) => {
  const fotoRef = useRef();
  const nomeRef = useRef();

  useEffect(() => {
    fotoRef.current.focus()
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('foto', event.target[0].value);
    formData.append('nome', event.target[1].value);
    fetch(
      "http://localhost/lp2/api/figure/create",
      {method: 'POST', body: formData}
      )
      .then((response) => response.json())
      .then((data) => {
        fotoRef.current.value = ''
        nomeRef.current.value = ''
        fotoRef.current.focus()
        alert(data.message)
        setFigure([data.figure, ...figure])
      });
  } 

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className="aba">
     <input placeholder='Foto :'ref={fotoRef} type="text" name="foto"/>
      <input placeholder='Nome :' ref={nomeRef} type="text" name="nome"/>
      <input type="submit" value="Enviar" />
      </div>
    </form>
  )
}

export default FormFigure;