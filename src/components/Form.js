import {Form} from'react-bootstrap';
import './Form.css';
import { useRef, useEffect} from 'react';
import CommentArea from './Commentarea';

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
      <>
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>Email:</label><input ref={emailRef} type="email" name="email"/>
      <label>Comentario:</label><input ref={comentarioRef} type="text" name="comentario"/>
      <input type="submit" value="Enviar" />
    </form>
    <CommentArea/>
    </>
    
    )
}
export default FormController;