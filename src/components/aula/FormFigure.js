import { useRef, useEffect} from 'react'


const FormFigure = ({figure, setFigure}) => {
  const fotoRef = useRef();
  const foto2Ref = useRef();
  const foto3Ref = useRef();
  const fotodofigure = useRef();
  const nomeRef = useRef();
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
    formData.append('fotodofigure', event.target[1].value)
    formData.append('nome', event.target[1].value);
    formData.append('sobre', event.target[1].value);
    formData.append('pertence', event.target[1].value);
    formData.append('quantaspessoas', event.target[1].value);
    fetch(
      "http://localhost/lp2/api/figure/create",
      {method: 'POST', body: formData}
      )
      .then((response) => response.json())
      .then((data) => {
       
        fotoRef.current.value = ''
        foto2Ref.current.value = ''
        foto3Ref.current.value = ''
        fotodofigure.current.value = ''
        nomeRef.current.value = ''
        sobreRef.current.value = ''
        pertenceRef.current.value = ''
        quantaspessoasRef.current.value = ''
        fotoRef.current.focus()
        alert(data.message)
        setFigure([data.figure, ...figure])
      });
  } 

  return (
    <form className='aba' onSubmit={(event) => handleSubmit(event)}>
   <label>Fotoo: </label> <input  ref={fotoRef} type="text" name="foto"/>
   <label>Foto 2: </label> <input ref={foto2Ref} type="text" name="foto2"/>
   <label>Foto 3: </label> <input  ref={foto3Ref} type="text" name="foto3"/>
  <label>Foto do Figure: </label> <input  ref={fotodofigure} type="text" name="fotodofigure"/>
   <label>Nome : </label> <input ref={nomeRef} type="text" name="name"/>
   <label>Sobre : </label> <input  ref={sobreRef} type="text" name="sobre"/>
   <label>Pertence : </label> <input ref={pertenceRef} type="text" name="pertence"/>
   <label>Quantas Pessoas ? : </label> <input ref={quantaspessoasRef} type="text" name="quantaspessoas"/>
      <input type="submit" value="Enviar" />
    </form>

  )
}
    export default FormFigure;