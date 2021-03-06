import { useRef, useEffect} from 'react'
import './FormsTuristic.css';

const FormPagPontos = ({paginapontos, setPaginaPontos}) => {
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
    formData.append('foto3', event.target[2].value)
    formData.append('name', event.target[3].value);
    formData.append('sobre', event.target[4].value);
    formData.append('pertence', event.target[5].value);
    formData.append('quantaspessoas', event.target[6].value);
    fetch(
      "http://localhost/lp2/api/paginapontos/create",
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
        setPaginaPontos([data.paginapontos, ...paginapontos])
      });
  } 

  return (
    <form className='aba' onSubmit={(event) => handleSubmit(event)}>
    <input placeholder='Foto:' ref={fotoRef} type="text" name="foto"/>
    <input placeholder='Foto 2:' ref={foto2Ref} type="text" name="foto2"/>
   <input placeholder='Foto 3:' ref={foto3Ref} type="text" name="foto3"/>
   <input placeholder='Nome:' ref={nameRef} type="text" name="name"/>
  <input placeholder='Sobre:' ref={sobreRef} type="text" name="sobre"/>
  <input placeholder='Visitas:'ref={quantaspessoasRef} type="text" name="quantaspessoas"/>
  <input placeholder='Pertence ?:' ref={pertenceRef} type="text" name="pertence"/>
  <input type="submit" value="Enviar"  style={{cursor: 'pointer',  color:'white',backgroundColor:'black'}}/>
     </form>
  )
}

export default FormPagPontos;