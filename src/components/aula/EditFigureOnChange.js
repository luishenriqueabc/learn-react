import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditFigureOnChange = () => {

    const { figureId } = useParams()
    const [figure, setFigure] = useState()
    const navigate = useNavigate()

   

    useEffect(() => {
    fetch("http://localhost/lp2/api/figure/select-by-id/?id=" + figureId)
    .then((response) => {
    if (response.ok) {
    return response.json();
    }
    throw new Error(response.statusText);
    })
    .then((data) => setFigure(data))
    .catch((error) => {
    console.log(error);
    })
    }, [figureId]);
    const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('id', figureId)
    formData.append('foto', event.target[0].value);
    formData.append('nome', event.target[1].value);;
    formData.append('nome2', event.target[2].value);
    formData.append('nome3', event.target[3].value);
    formData.append('nome4', event.target[4].value);
    fetch(
    "http://localhost/lp2/api/figure/update",
    {method: 'POST', body: formData}
    )
    .then((response) => response.json())
    .then((data) => {
    if(data?.figure?.id){
    navigate('/figureadm');
    //setpontos(clearUserValue)
    } else if(data?.message){
    alert(data.message)
    } else {
    console.log(data)
    }
    })
    }

    const handleChange = (event) => {
    const {name, value} = event.target;
    setFigure({...figure, [name]: value})
    }
    return (
    <>
    {figure ? (
    <form className='aba' onSubmit={(event) => handleSubmit(event)}>
 <input type="text" name="foto" value={figure.foto} onChange={handleChange}/>
   <input type="text" name="nome" value={figure.nome} onChange={handleChange}/>
    <input type="text" name="nome2" value={figure.nome2} onChange={handleChange}/>
  <input type="text" name="nome3" value={figure.nome3} onChange={handleChange}/>
    <input type="text" name="nome4" value={figure.nome4} onChange={handleChange}/>
    <input type="submit" value="Editar"  style={{cursor: 'pointer',  color:'white',backgroundColor:'black'}}/>
    </form>
    )
    : 
    (<p>Usuário não encontrado!</p>)
    }
    </>
    )
    }
export default EditFigureOnChange;