import { useRef, useEffect} from 'react'
import './FormsTuristic.css';

const FormPontos = ({pontos, setPontos}) => {
  const fotoRef = useRef();
  const foto2Ref = useRef();
  const foto3Ref = useRef();
  const nameRef = useRef();
  const sobreRef = useRef();
  const pertenceRef = useRef();
  const quantaspessoasRef = useRef();


  useEffect(() => {
    fotoRef.current.focus()
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('foto', event.target[0].value);
    formData.append('foto2', event.target[1].value);
    formData.append('foto3', event.target[1].value)
    formData.append('name', event.target[1].value);
    formData.append('sobre', event.target[1].value);
    formData.append('pertence', event.target[1].value);
    formData.append('quantaspessoas', event.target[1].value);
    fetch(
      "http://localhost/lp2/api/pontos/create",
      {method: 'POST', body: formData}
      )
      .then((response) => response.json())
      .then((data) => {
        fotoRef.current.value = ''
        foto2Ref.current.value = ''
        foto3Ref.current.value = ''
        nameRef.current.value = ''
        sobreRef.current.value = ''
        pertenceRef.current.value = ''
        quantaspessoasRef.current.value = ''
        fotoRef.current.focus()
        alert(data.message)
        setPontos([data.pontos, ...pontos])
      });
  } 

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>Foto:</label><input ref={fotoRef} type="text" name="foto"/>
      <label>Foto2:</label><input ref={foto2Ref} type="text" name="foto2"/>
      <label>Foto3:</label><input ref={foto3Ref} type="text" name="foto3"/>
      <label>Nome:</label><input ref={nameRef} type="text" name="name"/>
      <label>Sobre:</label><input ref={sobreRef} type="text" name="sobre"/>
      <label>Pertence a qual cidade?:</label><input ref={pertenceRef} type="text" name="pertence"/>
      <label>Quantas pessoas vão até lá?:</label><input ref={quantaspessoasRef} type="text" name="quantaspessoas"/>
      <input type="submit" value="Enviar" />
    </form>
  )
}

export default FormPontos;