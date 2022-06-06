import { useRef, useEffect} from 'react'
import './FormsTuristic.css';

const FormPontos = ({pontos, setPontos}) => {

  const nameRef = useRef();
  const sobreRef = useRef();
  const pertenceRef = useRef();
  const quantaspessoasRef = useRef();


  useEffect(() => {
    nameRef.current.focus()
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('name', event.target[0].value);
    formData.append('sobre', event.target[1].value);
    formData.append('pertence', event.target[1].value);
    formData.append('quantaspessoas', event.target[1].value);
    fetch(
      "http://localhost/lp2/api/pontos/create",
      {method: 'POST', body: formData}
      )
      .then((response) => response.json())
      .then((data) => {
        nameRef.current.value = ''
        sobreRef.current.value = ''
        pertenceRef.current.value = ''
        quantaspessoasRef.current.value = ''
        nameRef.current.focus()
        alert(data.message)
        setPontos([data.pontos, ...pontos])
      });
  } 

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>Nome:</label><input ref={nameRef} type="text" name="name"/>
      <label>Sobre:</label><input ref={sobreRef} type="text" name="sobre"/>
      <label>Pertence a qual cidade?:</label><input ref={pertenceRef} type="text" name="pertence"/>
      <label>Quantas pessoas vão até lá?:</label><input ref={quantaspessoasRef} type="text" name="quantaspessoas"/>
      <input type="submit" value="Enviar" />
    </form>
  )
}

export default FormPontos;