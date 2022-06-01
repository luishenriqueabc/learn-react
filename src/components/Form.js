import {Form} from'react-bootstrap';
import './Form.css';
import { useRef, useEffect} from 'react'

const FormController =({comment, setComment}) => {
  const emailRef = useRef();
  const comentarioRef = useRef();

  useEffect(() => {
    emailRef.current.focus()
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('email', event.target[0].value);
    formData.append('comentario', event.target[1].value);
    fetch(
      "http://localhost/lp2/api/comment/create",
      {method: 'POST', body: formData}
      )
      .then((response) => response.json())
      .then((data) => {
        emailRef.current.value = ''
        comentarioRef.current.value = ''
        emailRef.current.focus()
        alert(data.message)
        setComment([data.comment, ...comment])
      });
  } 



  
    return(
      <Form className='wdt'>
    <div className='ss '>
      <Form.Label>Comentarios</Form.Label>
    </div>
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>Nome:</label><input ref={nameRef} type="text" name="name"/>
      <label>Sobre:</label><input ref={sobreRef} type="text" name="sobre"/>
      <label>Foto:</label><input ref={fotoRef} type="text" name="foto"/>
      <input type="submit" value="Enviar" />
    </form>
    </Form>
    )
}
export default FormController;